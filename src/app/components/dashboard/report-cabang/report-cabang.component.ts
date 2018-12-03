import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-report-cabang',
  templateUrl: './report-cabang.component.html',
  styleUrls: ['./report-cabang.component.css']
})
export class ReportCabangComponent implements OnInit {
  collapsed: boolean = true;
  list_branch = [];
  totalActualUnit: number

  request_data = { app: "muf-dashboard", method: "", data: { bulan: "", branch_code: "" } }
  months : any;
  loading: boolean = true;
  all_months = { f_checked_all_months: false, f_disabled_all_months: false };

  monthe :any;
  data: string;
  cab = localStorage.getItem("currentUser");
  test=JSON.parse(this.cab);
  area = this.test["data"].resultUserProfileLocation[0].branch_code
  // cabang=this.test["data"].resultUserProfileLocation[0].branch_code
  cabang = this.area
  // cabang = "0103"
  ncabang = this.test["data"].resultUserProfileLocation[0].branch_name
  // ncabang = "DUREN TIGA"
  f_month: boolean = false;
  f_monthly_usage: boolean = false;
  unit: any
  amount: any
  
  // data:any
  mom: any
  mtd: any
  yoy: any
  ytd: any
  avg: any
  booking: any
  actualUnit: any
  actualAmount: any
  proyeksiAmout: any
  proyeksi: any
  actual: any
  actualTarget: any
  totalAmountByPortofolio: any
  totalUnitByPortofolio: any
  totalActualInUnit: any
  totalActualInAmount: any
  totalProyeksiInAmount: any
  title_unit_booking_ir_1:any;
  title_unit_booking_ir_2:any;
  title_unit_booking_ir_3:any;

  params = {
    bulan: this.monthe,
    branch_code: this.cabang
  }

  branch_params_code = {
    "data": "WHERE BRANCH_TYPE = 'BR' ORDER BY BRANCH_NAME ASC"
  }

  branch_params_area = {
    "data": "WHERE BRANCH_PARENT = '"+this.area+"' ORDER BY BRANCH_NAME ASC"
  }

  list_area = {
    "app": "mdm",
    "method": "getBranchArea",
    "data": null
  }


  list_branch_area = {
    "app": "mdm",
    "method": "getBranchArea",
    "data": this.branch_params_code
    
  }

  data_parameter = {
    app: "muf-dashboard",
    method: null,
    data: null
  }

  constructor(private service: ServicesService) {
    
    this.months = [
      { name: 'January', value: '1', f_checked: false, f_disabled: false },
      { name: 'February', value: '2', f_checked: false, f_disabled: false },
      { name: 'March', value: '3', f_checked: false, f_disabled: false },
      { name: 'April', value: '4', f_checked: false, f_disabled: false },
      { name: 'May', value: '5', f_checked: false, f_disabled: false },
      { name: 'June', value: '6', f_checked: false, f_disabled: false },
      { name: 'July', value: '7', f_checked: false, f_disabled: false },
      { name: 'August', value: '8', f_checked: false, f_disabled: false },
      { name: 'September', value: '9', f_checked: false, f_disabled: false },
      { name: 'October', value: '10', f_checked: false, f_disabled: false },
      { name: 'November', value: '11', f_checked: false, f_disabled: false },
      { name: 'December', value: '12', f_checked: false, f_disabled: false }
    ];
      this.monthe = (new Date().getMonth() + 1).toString();
    
  }

  ngOnInit() {
    // this.setDefaultMonth();
    
    this.getBranch();
    // this.monthAdd();
    this.getDataBookingIr();
    // this.onClickSubmit();
  }

  monthAdd(){
    var tot = 0
    this.months.forEach(element => {
       tot =+ element.value
    });
    console.log(tot) 
  }

  getDataProyeksi() {
    this.data_parameter.method = "proyeksi";
    this.service.postData('post', this.data_parameter).subscribe(
      response => {
        if (response.status == true) {
          this.proyeksi = response.data
          // console.log(response.data)
        }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
          this.getDataProyeksi();
        }
      }
    )
  }

  getDataActual(){
    this.data_parameter.method = "actual"
    this.service.postData('post', this.data_parameter).subscribe(
      response => {
        if(response.status == true){
          this.actual = response.data
        }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
          this.getDataActual()
        }
      }
    )
  }

  getDataAmount() {
    this.data_parameter.method = "amountBookingIR"
    this.service.postData('post', this.data_parameter).subscribe(
      response => {
        if (response.status == true) {
          this.amount = response.data
          // console.log(response.data)
        }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
          this.getDataAmount();
        }
      }
    )
  }

  getDataBookingIr() {
    
    this.data_parameter.method = "unitBookingIR"
    this.data_parameter.data = {bulan:this.monthe,branch_code : this.cabang}
    this.service.postData('post', this.data_parameter).subscribe(
      response => {
        if (response.status == true) {
          this.booking = response.data_booking_ir
          this.mtd = response.data_mtd_target
          this.mom = response.data_mom
          this.avg = response.data_avg_booking_ir
          this.ytd = response.data_ytd_target
          this.yoy = response.data_yoy
          this.actual = response.data_actual
          this.proyeksi = response.data_proyeksi
          this.unit = response.data_unit_booking_ir
          this.totalUnitByPortofolio = response.data_total_unit_by_portofolio
          this.amount = response.data_amount_booking_ir
          this.totalAmountByPortofolio = response.data_total_amount_by_portofolio
          this.actualUnit = response.data_actual_in_unit
          this.totalActualInUnit = response.data_total_actual_in_unit
          this.actualAmount = response.data_actual_in_amount
          this.totalActualInAmount = response.data_total_actual_in_amount
          this.proyeksiAmout = response.data_proyeksi_in_amount
          this.totalProyeksiInAmount = response.data_total_proyeksi_in_amount
          this.actualTarget = response.data_target_actual
          this.loading = false;
          this.months.forEach(element => {
            if (element.value == this.monthe) {
              this.title_unit_booking_ir_1 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
            if (element.value == this.monthe-1) {
              this.title_unit_booking_ir_2 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
            if (element.value == this.monthe-2) {
              this.title_unit_booking_ir_3 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
          });
          console.log(response.data)
        }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
          this.loading = false;
          // this.getDataBookingIr();
        }
      } , error =>
      {
        console.log(error)
        this.loading = false;
      }
    )
  }

  refresh() {
    this.loading = true;
    this.booking = []
          this.mtd = []
          this.mom = []
          this.avg = []
          this.ytd = []
          this.yoy = []
          this.actual = []
          this.proyeksi = []
          // this.unit = []
          this.totalUnitByPortofolio = []
          this.amount = []
          this.totalAmountByPortofolio = []
          this.actualUnit = []
          this.totalActualInUnit = []
          this.actualAmount = []
          this.totalActualInAmount = []
          this.proyeksiAmout = []
          this.totalProyeksiInAmount = []
          this.actualTarget = []

          // this.getDataBookingIr()
    // this.listProject();
  }


  // getDataMtd() {
  //   this.data_parameter.method = "mtdTarget"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if (response.status == true) {
  //         this.mtd = response.data
  //         // console.log(response.data[0])
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataMtd();
  //       }
  //     }
  //   )
  // }

  // getDataMom() {
  //   this.data_parameter.method = "mom"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if (response.status == true) {
  //         this.mom = response.data
  //         // console.log(response.data[1])
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataMom();
  //       }

  //     }
  //   )
  // }

  getDataUnit() {
    this.refresh();
    this.data_parameter.method = "unitBookingIR"
    this.service.postData('post', this.data_parameter).subscribe(
      response => {
        if (response.status == true) {
          this.unit = response.data
          this.months.forEach(element => {
            if (element.value == this.monthe) {
              this.title_unit_booking_ir_1 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
            if (element.value == this.monthe-1) {
              this.title_unit_booking_ir_2 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
            if (element.value == this.monthe-2) {
              this.title_unit_booking_ir_3 = element.name.substring(0, 3)+'-'+new Date().getFullYear();
            }
          });
          // console.log(response.data)
        }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
          this.getDataUnit();
        }
      }
    )
  }

  // getDataAvgBookingIr() {
  //   this.data_parameter.method = "avgBookingIR"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if (response.status == true) {
  //         this.avg = response.data
  //         // console.log(response.data)
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataAvgBookingIr();
  //       }
  //     }
  //   )
  // }

  // getDataYtd() {
  //   this.data_parameter.method = "ytdTarget"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if (response.status == true) {
  //         this.ytd = response.data
  //         // console.log(response.data)
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataYtd()
  //       }
  //     }
  //   )
  // }

  // getDataYoy(){
  //   this.data_parameter.method = "YOY"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.yoy = response.data
  //         // console.log(response.data)
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataYoy();
  //       }
  //     }
  //   )
  // }

  // getDataActualUnit(){
  //   this.data_parameter.method = "actualInUnit"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.actualUnit = response.data
  //         // console.log(response.data)
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataActualUnit();
  //       }
  //     } 
  //   )
  // }

  // getDataTargetActual(){
  //   this.data_parameter.method = "targetActual"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //      console.log(response.data)
  //     }
  //   )
  // }

  // getDataActualAmount(){
  //   this.data_parameter.method = "actualInAmount"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.actualAmount = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataActualAmount();
  //       }
  //     }
  //   )
  // }

  // getDataProyeksiAmount(){
  //   this.data_parameter.method = "proyeksiInAmount"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.proyeksiAmout = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getDataProyeksiAmount()
  //       }
  //     }
  //   )
  // }

  // getDataAvg() {
  //   this.service.postData('post', )
  // }

  getBranch() {
    let localS:any = localStorage.getItem("currentUser");
    localS = JSON.parse(this.cab);
    for (let index = 0; index < localS.data.resultProfileUserRole.length; index++) {
      if(localS.data.resultProfileUserRole[index].role_code == 'DSB_MKT_BR') {
        this.list_area.data = this.branch_params_code;
        break;
      } else {
        this.list_area.data = this.branch_params_area;
      }
    }
    this.service.postData('post', this.list_area).subscribe(
      response => {
        if (response) {
          this.list_branch = response;
          for (let index = 0; index < localS.data.resultProfileUserRole.length; index++) {
            if(localS.data.resultProfileUserRole[index].role_code == 'DSB_MKT_BR') {
              this.cabang = this.area;
              break;
            } else {
              this.cabang = this.list_branch[0].branch_code
            }
          }
          console.log(this.list_branch)
        }
      }
    )
  }

  setMonth() {
    this.months.forEach(element => {
      if (element.value == (new Date().getMonth() + 1).toString()) {
        element.f_checked = true;
      }
    });
  }

  onClickSubmit() {
    let getM = this.monthe
    let getBran = this.cabang
    this.setNCabang();
    this.setDefaultMonth(getM, getBran)
    this.ngOnInit();
    

  }

  // getTotalAmountPortfolio(){
  //   this.data_parameter.method = "totalAmountByPortofolio";
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.totalAmountByPortofolio = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getTotalAmountPortfolio();
  //       }
  //     }
  //   )
  // }

  // getTotalUnitByPortfolio(){
  //   this.data_parameter.method = "totalUnitByPortofolio";
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.totalUnitByPortofolio = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getTotalUnitByPortfolio();
  //       }
  //     }
  //   )
  // }

  // getTotActUnit(){
  //   this.data_parameter.method = "totalActualInUnit"
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.totalActualInUnit = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getTotActUnit();
  //       }
  //     }
  //   )
  // }

  // getTotActAmount(){
  //   this.data_parameter.method = "totalActualInAmount";
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.totalActualInAmount = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getTotActAmount();
  //       }
  //     }
  //   )
  // }

  // getTotProAmount(){
  //   this.data_parameter.method = "totalProyeksiInAmount";
  //   this.service.postData('post', this.data_parameter).subscribe(
  //     response => {
  //       if(response.status == true){
  //         this.totalProyeksiInAmount = response.data
  //       }else if(response.status == false && response.notif == "IJ031041: Connection handle has been closed and is unusable"){
  //         this.getTotProAmount();
  //       }
  //     }
  //   )
  // }

  setNCabang(){
    this.ncabang = this.cabang;
    this.list_branch.forEach(element => {
      if(element.branch_code == this.ncabang){
        this.ncabang = element.branch_name;
      }
    });
  }
  setDefaultMonth(bulan?, bran?) {
    //untuk set bulan otoomatis bulan yang berjalan
    let m = this.monthe
    // console.log(m)
    if (bulan == null) {
      this.params.bulan = this.monthe
      this.params.branch_code = this.cabang
    }
    else {
      this.params.bulan = bulan
      this.params.branch_code = bran
    }

    let nama_cabang = this.list_branch
    var nama = nama_cabang.find(getNama => nama_cabang['branch_code'] == bran)
    // this.ncabang = nama.branc
    console.log(nama_cabang)
    // this.params.bulan = this.monthe;
    // this.params.bulan = this.monthe;
    // this.getDataMom()
    // this.getDataMtd();
    this.getDataBookingIr();
    // this.getDataAmount();
    this.getDataUnit();
    // this.getDataAvgBookingIr();
    // this.getDataYoy();
    // this.getDataYtd();
    // this.getDataActualAmount();
    // this.getDataActualUnit();
    // this.getDataProyeksiAmount();
    // this.getDataActual();
    // this.getDataProyeksi();
    // this.getTotalAmountPortfolio();
    // this.getTotProAmount();
    // this.getTotActAmount();
    // this.getTotalUnitByPortfolio();
    // this.getTotalAmountPortfolio();
    // this.getTotActUnit();
    // this.setDefaultBranch();
  }

  // setDefaultBranch(){
  //   this.cabang = this
  //   // this.branch = this.getBranch()
  //   // this.params.branch_code = this.branch;
  // }
}
