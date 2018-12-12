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
  months: any;
  loading: boolean = true;
  all_months = { f_checked_all_months: false, f_disabled_all_months: false };

  monthe: any;
  cabang;
  data: string;
  cab = localStorage.getItem("currentUser");
  test = JSON.parse(this.cab);
  area: any;
  bran_id;
  // cabang=this.test["data"].resultUserProfileLocation[0].branch_code

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
  title_unit_booking_ir_1: any;
  title_unit_booking_ir_2: any;
  title_unit_booking_ir_3: any;
  // ---------------------------------------------
  datas
  setSatus;
  hide = true;
  // ----------------------- color text ----------------------
  //booking IR
  colorBookUniGr1 = ''
  colorBookUniGr2 = ''
  colorBookAmntiGr1 = ''
  colorBookAmntiGr2 = ''
  //MOM
  colorMom1 = ''
  colorMom2 = ''
  //Avg Booking IR
  colorAvgUniGr1 = ''
  colorAvgUniGr2 = ''
  colorAvgAmntGr1 = ''
  colorAvgAmntGr2 = ''
  //YOY
  colorYoy1 = ''
  colorYoy2 = ''
  //Actual  
  colorActFpdDiff1 = ''
  colorActFpdDiff2 = ''
  colorActF3pdDiff1 = ''
  colorActF3pdDiff2 = ''
  colorActMobDiff1 = ''
  colorActMobDiff2 = ''
  colorActFidDiff1 = ''
  colorActFidDiff2 = ''
  //proyeksi
  colorProFpdDiff1 = ''
  colorProFpdDiff2 = ''
  colorProF3pdDiff1 = ''
  colorProF3pdDiff2 = ''
  colorProMobDiff1 = ''
  colorProMobDiff2 = ''
  colorProFidDiff1 = ''
  colorProFidDiff2 = ''


  unitBookingIRUnit = {
    "data_sekarang": null,
    "data_bulan_kurang_2": null,
    "data_bulan_kurang_3": null,
    "growth_2_1": null,
    "growth_3_2": null,
  };
  unitBookingIRAmount = {
    "data_sekarang": null,
    "data_bulan_kurang_2": null,
    "data_bulan_kurang_3": null,
    "growth_2_1": null,
    "growth_3_2": null,
  };
  params = {
    "bulan": this.monthe,
    "branch_code": this.cabang
  }

  branch_params_code = {
    "data": "WHERE BRANCH_TYPE = 'BR' ORDER BY BRANCH_NAME ASC"
  }

  branch_params_area = {
    "data": "WHERE BRANCH_PARENT = '" + this.test["data"].resultUserProfileLocation[0].branch_code + "' ORDER BY BRANCH_NAME ASC"
  }

  branch_params_code_ho = {
    "data": "WHERE BRANCH_TYPE = 'BR' AND BRANCH_TYPE NOT IN ('AR','HO') ORDER BY BRANCH_NAME ASC"
  }



  list_branch_area = {
    "app": "mdm",
    "method": "getBranchArea",
    "data": this.branch_params_code

  }

  list_area = {
    "app": "mdm",
    "method": "getBranchArea",
    "data": null
  }

  getDataByMethod = {
    "app": "muf-dashboard",
    "method": "bookingIR",
    "data": {
      "bulan": "8",
      "branch_code": "0102"
    }
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
    // console.log(this.test['data'].resultUserProfileLocation[0].branch_code)
    this.getDataBranch();


  }

  getDataBranch() {
    var bran: string;
    var cu = this.test;
    //console.log(cu);
    //validasi area ,branch, atau ho
    for (let index = 0; index < cu.data.resultProfileUserRole.length; index++) {
      if (cu.data.resultProfileUserRole[index].role_code == 'DSB_MKT_BR') {
        // this.cabang=cu['data'].resultUserProfileLocation[0].branch_code;

        this.list_area.data = this.branch_params_code;
        //console.log(this.cabang);
        this.setSatus = "branch"
        this.hide = true;
        break;
      }
      else if (cu.data.resultProfileUserRole[index].role_code == 'DSB_MKT_AR') {
        this.list_area.data = this.branch_params_area;
        this.setSatus = "area"
        this.hide = false;
        break;
      }
      else {
        this.list_area.data = this.branch_params_code_ho;
        this.setSatus = "ho"
        this.hide = false;
      }
    }
    //get branch 
    this.service.postData('post', this.list_area).subscribe(
      res => {
        this.datas = res;
        //console.log(this.datas);
        this.list_branch = this.datas;
        if (this.setSatus == "area" && this.cabang == undefined) {
          this.cabang = this.list_branch['0'].branch_code;
        }
        if (this.setSatus == "ho" && this.cabang == undefined) {
          this.cabang = this.list_branch['1'].branch_code;
        }
        if (this.setSatus == "branch" && this.cabang == undefined) {
          this.cabang = this.test['data'].resultUserProfileLocation[0].branch_code;
        }
        this.loading = false;
        //panggil semua method cuy
        this.getDataUnitBookingIR(this.monthe, this.cabang);
        this.getDataWorkingDay(this.monthe, this.cabang);
        this.getMtdTarget(this.monthe, this.cabang);
        this.getDataAvgBookingIR(this.monthe, this.cabang);
        this.getDataYtdTarget(this.monthe, this.cabang);
        this.getDataMom(this.monthe, this.cabang);
        this.getDataYoy(this.monthe, this.cabang);
        this.getDatAct(this.monthe, this.cabang);
        this.getDataProyeksi(this.monthe, this.cabang);
        this.getDataActTarget(this.monthe, this.cabang);
        this.getDataUnit(this.monthe, this.cabang);
        this.getDataTotalUnit(this.monthe, this.cabang);
        this.getDataAmount(this.monthe, this.cabang);
        this.getDataTotalAmount(this.monthe, this.cabang)
        this.getDataActUnit(this.monthe, this.cabang);
        this.getDataActAmount(this.monthe, this.cabang);
        this.getDataProAmount(this.monthe, this.cabang);
        this.getDataTotActAmount(this.monthe, this.cabang);
        this.getDataTotActUnit (this.monthe, this.cabang);
        this.getTotProAmount(this.monthe, this.cabang);
      }
    );

  }

  refresh() {
    this.loading = true;
    this.getDataBranch();
  }

  //get data unit booking IR
  getDataUnitBookingIR(bulan, br_code) {
    var unitBook = {
      "app": "muf-dashboard",
      "method": "bookingIR",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    var dataUBI = this.list_branch
    //console.log(dataUBI);

    //console.log(this.monthe)

    this.service.postApi('post', unitBook).subscribe(result => {
      //console.log(result['data']);
      var temp;
      temp = result['data'];
      this.unitBookingIRUnit.data_sekarang = temp['1'].data_sekarang;
      this.unitBookingIRUnit.data_bulan_kurang_2 = temp['1'].data_bulan_kurang_2;
      this.unitBookingIRUnit.data_bulan_kurang_3 = temp['1'].data_bulan_kurang_3;
      this.unitBookingIRUnit.growth_2_1 = temp['1'].growth_2_1;
      this.unitBookingIRUnit.growth_3_2 = temp['1'].growth_3_2;
      console.log(temp['1'].data_bulan_kurang_2)
      console.log(temp['1'].data_sekarang)

      //warna kondisi growth
      this.colorBookUniGr1 = +temp['1'].data_bulan_kurang_3 > +temp['1'].data_bulan_kurang_2? "red":"green"
      this.colorBookUniGr2 = +temp['1'].data_bulan_kurang_2 > +temp['1'].data_sekarang ? "red" : "green"
      console.log(this.colorBookUniGr2)

      // if(temp['1'].data_bulan_kurang_2 > temp['1'].data_sekarang){
      //   this.colorBookUniGr2 = 'red'
      // }else if(temp['1'].data_bulan_kurang_2 < temp['1'].data_sekarang){
      //   this.colorBookUniGr2 = 'green'
      // }


      this.unitBookingIRAmount.data_sekarang = temp['0'].data_sekarang;
      this.unitBookingIRAmount.data_bulan_kurang_2 = temp['0'].data_bulan_kurang_2;
      this.unitBookingIRAmount.data_bulan_kurang_3 = temp['0'].data_bulan_kurang_3;
      this.unitBookingIRAmount.growth_2_1 = temp['0'].growth_2_1;
      this.unitBookingIRAmount.growth_3_2 = temp['0'].growth_3_2;

      this.colorBookAmntiGr1 = +temp['0'].data_bulan_kurang_3 > +temp['0'].data_bulan_kurang_2? "red":"green"
      this.colorBookAmntiGr2 = +temp['0'].data_bulan_kurang_2 > +temp['0'].data_sekarang ? "red" : "green"
      
      //warna kondisi growth
      // if(temp['0'].data_bulan_kurang_3 > temp['0'].data_bulan_kurang_2 || temp['0'].data_bulan_kurang_2 > temp['0'].data_sekarang){
      //   this.colorBookAmntiGr1 = 'red'
      // }else if(temp['0'].data_bulan_kurang_3 < temp['0'].data_bulan_kurang_2){
      //   this.colorBookAmntiGr1 = 'green'
      // }

      // if(temp['0'].data_bulan_kurang_2 > temp['0'].data_sekarang){
      //   this.colorBookAmntiGr1 = 'red'
      // }else if(temp['0'].data_bulan_kurang_2 < temp['0'].data_sekarang){
      //   this.colorBookAmntiGr2 = 'green'
      // }
    })


  }

  //untuk title table
  tableTitle = {
    "title1": null,
    "workday1": null,
    "title2": null,
    "workday2": null,
    "title3": null,
    "workday3": null,
    "title4": null
  }
  getDataWorkingDay(bulan, br_code) {
    var bulans = {
      "app": "muf-dashboard",
      "method": "countWorkDay",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    let tgl;
    //get data working day untuk title
    this.service.postApi('post', bulans).subscribe(getTanggal => {
      tgl = getTanggal;
      this.tableTitle.title1 = tgl['data_count_work_day'][0].periode;
      this.tableTitle.workday1 = tgl['data_count_work_day'][0].count_work_day
      this.tableTitle.title2 = tgl['data_count_work_day'][1].periode;
      this.tableTitle.workday2 = tgl['data_count_work_day'][1].count_work_day
      this.tableTitle.title3 = tgl['data_count_work_day'][2].periode;
      this.tableTitle.workday3 = tgl['data_count_work_day'][2].count_work_day

      let tggl = new Date(this.tableTitle.title1);
      let tahun = (tggl.getFullYear() - 1)
      let bln = tggl.getMonth()
      let thn_blkg = new Date(tahun, bln)

      this.tableTitle.title4 = thn_blkg

    })

  }

  target = {
    "target_unit": null,
    "target_unit_realisasi": null,
    "target_unit_acievment": null,
    "target_amount": null,
    "target_amount_realisasi": null,
    "target_amount_acievment": null,
  }
  getMtdTarget(bulan, br_code) {
    var mtdTarget = {
      "app": "muf-dashboard",
      "method": "mtdTarget",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    let mtd;
    this.service.postApi('post', mtdTarget).subscribe(
      resMtd => {
        mtd = resMtd;
        this.target.target_amount = mtd['data'][0].target;
        this.target.target_amount_realisasi = mtd['data'][0].realisasi;
        this.target.target_amount_acievment = mtd['data'][0].acievment;

        this.target.target_unit = mtd['data'][1].target;
        this.target.target_unit_realisasi = mtd['data'][1].realisasi;
        this.target.target_unit_acievment = mtd['data'][1].acievment;
        //console.log(mtd)
      }
    );

  }

  dataAvg = {
    "avg_unit1": null,
    "avg_unit2": null,
    "avg_unit3": null,
    "avg_amount1": null,
    "avg_amount2": null,
    "avg_amount3": null,
    "avg_growth_unit2_1": null,
    "avg_growth_unit3_2": null,
    "avg_growth_amount2_1": null,
    "avg_growth_amount3_2": null
  }

  //data avgbookingIR
  getDataAvgBookingIR(bulan, br_code) {
    var AvgBookingIR = {
      "app": "muf-dashboard",
      "method": "avgBookingIR",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    let avg;
    this.service.postApi('post', AvgBookingIR).subscribe(resAvg => {
      avg = resAvg;
      // console.log(avg)
      // console.log(avg['data'][0].data_sekarang)
      this.dataAvg.avg_unit1 = avg['data'][1].data_sekarang;
      this.dataAvg.avg_unit2 = avg['data'][1].data_bulan_kurang_2;
      this.dataAvg.avg_unit3 = avg['data'][1].data_bulan_kurang_3;
      this.dataAvg.avg_growth_unit2_1 = avg['data'][1].growth_2_1;
      this.dataAvg.avg_growth_unit3_2 = avg['data'][1].growth_3_2;

      this.colorAvgUniGr1 = +avg['data'][1].data_bulan_kurang_3 > +avg['data'][1].data_bulan_kurang_2 ? "red":"green"
      this.colorAvgUniGr2 = +avg['data'][1].data_bulan_kurang_2 > +avg['data'][1].data_sekarang ? "red":"green"

      this.dataAvg.avg_amount1 = avg['data'][0].data_sekarang;
      this.dataAvg.avg_amount2 = avg['data'][0].data_bulan_kurang_2;
      this.dataAvg.avg_amount3 = avg['data'][0].data_bulan_kurang_3;
      this.dataAvg.avg_growth_amount2_1 = avg['data'][0].growth_2_1;
      this.dataAvg.avg_growth_amount3_2 = avg['data'][0].growth_3_2;
      
      this.colorAvgAmntGr1 = +avg['data'][0].data_bulan_kurang_3 > +avg['data'][0].data_bulan_kurang_2 ? "red":"green"
      this.colorAvgAmntGr2 = +avg['data'][0].data_bulan_kurang_2 > +avg['data'][0].data_sekarang ? "red":"green"
    })

  }

  dataYtdTarget = {
    "ytd_unit_target": null,
    "ytd_unit_realisasi": null,
    "ytd_unit_acievment": null,
    "ytd_amount_target": null,
    "ytd_amount_realisasi": null,
    "ytd_amount_acievment": null
  }
  getDataYtdTarget(bulan, br_code) {
    var ytdTarget = {
      "app": "muf-dashboard",
      "method": "ytdTarget",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    let ytd;

    this.service.postApi('post', ytdTarget).subscribe(
      resYtd => {
        ytd = resYtd
        //console.log(ytd);
        //console.log(ytd['data'][0].target);
        this.dataYtdTarget.ytd_unit_target = ytd['data'][1].target;
        this.dataYtdTarget.ytd_unit_realisasi = ytd['data'][1].realisasi;
        this.dataYtdTarget.ytd_unit_acievment = ytd['data'][1].acievment;

        this.dataYtdTarget.ytd_amount_target = ytd['data'][0].target;
        this.dataYtdTarget.ytd_amount_realisasi = ytd['data'][0].realisasi;
        this.dataYtdTarget.ytd_amount_acievment = ytd['data'][0].acievment;

      }
    );
  }

  dataMom = {
    "data_unit_thn_lalu": null,
    "data_unit_sekarang": null,
    "data_unit_growth": null,
    "data_amount_thn_lalu": null,
    "data_amount_sekarang": null,
    "data_amount_growth": null
  }

  getDataMom(bulan, br_code) {
    var mom = {
      "app": "muf-dashboard",
      "method": "mom",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    let data_mom

    this.service.postApi('post', mom).subscribe(
      response => {
        data_mom = response
        //console.log(data_mom)
        this.dataMom.data_unit_sekarang = data_mom['data'][1].data_sekarang
        this.dataMom.data_unit_thn_lalu = data_mom['data'][1].data_tahun_lalu
        this.dataMom.data_unit_growth = data_mom['data'][1].growth

        this.colorMom1 = +data_mom['data'][1].data_tahun_lalu > +data_mom['data'][1].data_sekarang ? "red":"green"

        this.dataMom.data_amount_sekarang = data_mom['data'][0].data_sekarang
        this.dataMom.data_amount_thn_lalu = data_mom['data'][0].data_tahun_lalu
        this.dataMom.data_amount_growth = data_mom['data'][0].growth

        this.colorMom2 = +data_mom['data'][0].data_tahun_lalu > +data_mom['data'][0].data_sekarang ? "red":"green"
      }
    )
  }

  dataYoy = {
    "unit_tahun_lalu": null,
    "unit_sekarang": null,
    "unit_growth": null,
    "amount_tahun_lalu": null,
    "amout_sekarang": null,
    "amount_growth": null
  }

  getDataYoy(bulan, br_code) {
    let apiYoy = {
      "app": "muf-dashboard",
      "method": "YOY",
      "data": {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    let yoy
    this.service.postApi('post', apiYoy).subscribe(
      response => {
        yoy = response.data
        // console.log(yoy)
        this.dataYoy.unit_sekarang = yoy['1'].realisasi
        this.dataYoy.unit_tahun_lalu = yoy['1'].realisasi_y_min_1
        this.dataYoy.unit_growth = yoy['1'].growth

        this.colorYoy1 = +yoy['1'].realisasi_y_min_1 > +yoy['1'].realisasi ? "red":"green"

        this.dataYoy.amout_sekarang = yoy['0'].realisasi
        this.dataYoy.amount_tahun_lalu = yoy['0'].realisasi_y_min_1
        this.dataYoy.amount_growth = yoy['0'].growth

        this.colorYoy2 = +yoy['0'].realisasi_y_min_1 > +yoy['0'].realisasi ? "red":"green"
      }
    )
  }

  dataAct = {
    "fid_bl": null,
    "fid_bs": null,
    "fid_dbl": null,
    "fid_diff1": null,
    "fid_diff2": null,

    "fpd_bl": null,
    "fpd_bs": null,
    "fpd_dbl": null,
    "fpd_diff1": null,
    "fpd_diff2": null,

    "f3pd_bl": null,
    "f3pd_bs": null,
    "f3pd_dbl": null,
    "f3pd_diff1": null,
    "f3pd_diff2": null,

    "mob_bl": null,
    "mob_bs": null,
    "mob_dbl": null,
    "mob_diff1": null,
    "mob_diff2": null,
  }

  getDatAct(bulan, br_code) {
    let actApi = {
      "app": "muf-dashboard",
      "method": "actual",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    let act
    this.service.postApi('post', actApi).subscribe(
      response => {
        act = response.data
        //console.log(act)
        this.dataAct.mob_bl = act['0'].bl_FPD
        this.dataAct.mob_bs = act['0'].bs_FPD
        this.dataAct.mob_dbl = act['0'].dbl_FPD
        this.dataAct.mob_diff1 = act['0'].diff1
        this.dataAct.mob_diff2 = act['0'].diff2

        this.colorActMobDiff1 = +act['0'].bs_FPD > +act['0'].bl_FPD ? "red" : "green"
        this.colorActMobDiff2 = +act['0'].bs_FPD > +act['0'].dbl_FPD ? "red" : "green"

        this.dataAct.f3pd_bl = act['1'].bl_FPD
        this.dataAct.f3pd_bs = act['1'].bs_FPD
        this.dataAct.f3pd_dbl = act['1'].dbl_FPD
        this.dataAct.f3pd_diff1 = act['1'].diff1
        this.dataAct.f3pd_diff2 = act['1'].diff2

        this.colorActF3pdDiff1 = +act['1'].bs_FPD > +act['1'].bl_FPD ? "red" : "green"
        this.colorActF3pdDiff2 = +act['1'].bs_FPD > +act['1'].dbl_FPD ? "red" : "green"

        this.dataAct.fid_bl = act['2'].bl_FPD
        this.dataAct.fid_bs = act['2'].bs_FPD
        this.dataAct.fid_dbl = act['2'].dbl_FPD
        this.dataAct.fid_diff1 = act['2'].diff1
        this.dataAct.fid_diff2 = act['2'].diff2

        this.colorActFidDiff1 = +act['2'].bs_FPD > +act['2'].bl_FPD ? "red" : "green"
        this.colorActFidDiff2 = +act['2'].bs_FPD > +act['2'].dbl_FPD ? "red" : "green"

        this.dataAct.fpd_bl = act['3'].bl_FPD
        this.dataAct.fpd_bs = act['3'].bs_FPD
        this.dataAct.fpd_dbl = act['3'].dbl_FPD
        this.dataAct.fpd_diff1 = act['3'].diff1
        this.dataAct.fpd_diff2 = act['3'].diff2

        this.colorActFpdDiff1 = +act['3'].bs_FPD > +act['3'].bl_FPD ? "red" : "green"
        this.colorActFpdDiff2 = +act['3'].bs_FPD > +act['3'].dbl_FPD ? "red" : "green"
      }

    )
  }

  dataPro = {
    "fid_bl": null,
    "fid_bs": null,
    "fid_dbl": null,
    "fid_diff1": null,
    "fid_diff2": null,

    "fpd_bl": null,
    "fpd_bs": null,
    "fpd_dbl": null,
    "fpd_diff1": null,
    "fpd_diff2": null,

    "f3pd_bl": null,
    "f3pd_bs": null,
    "f3pd_dbl": null,
    "f3pd_diff1": null,
    "f3pd_diff2": null,

    "mob_bl": null,
    "mob_bs": null,
    "mob_dbl": null,
    "mob_diff1": null,
    "mob_diff2": null,
  }

  getDataProyeksi(bulan, br_code) {
    let proApi = {
      "app": "muf-dashboard",
      "method": "proyeksi",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    let proyeksi
    this.service.postApi('post', proApi).subscribe(
      response => {
        proyeksi = response.data
        this.dataPro.mob_bl = proyeksi['0'].bl_FPD
        this.dataPro.mob_bs = proyeksi['0'].bs_FPD
        this.dataPro.mob_dbl = proyeksi['0'].dbl_FPD
        this.dataPro.mob_diff1 = proyeksi['0'].diff1
        this.dataPro.mob_diff2 = proyeksi['0'].diff2

        if(proyeksi['0'].diff1 > 99){
          this.colorProMobDiff1 = 'green'
        } else if(proyeksi['0'].diff1 < 95){
          this.colorProMobDiff1 = 'red'
        }else{
          this.colorProMobDiff1 = 'yellow'
        }

        if(proyeksi['0'].diff2 > 99){
          this.colorProMobDiff2 = 'green'
        } else if(proyeksi['0'].diff2 < 95){
          this.colorProMobDiff2 = 'red'
        }else{
          this.colorProMobDiff2 = 'yellow'
        }

        this.dataPro.f3pd_bl = proyeksi['1'].bl_FPD
        this.dataPro.f3pd_bs = proyeksi['1'].bs_FPD
        this.dataPro.f3pd_dbl = proyeksi['1'].dbl_FPD
        this.dataPro.f3pd_diff1 = proyeksi['1'].diff1
        this.dataPro.f3pd_diff2 = proyeksi['1'].diff2

        if(proyeksi['1'].diff1 > 99){
          this.colorProF3pdDiff1 = 'green'
        } else if(proyeksi['1'].diff1 < 95){
          this.colorProF3pdDiff1 = 'red'
        }else{
          this.colorProF3pdDiff1 = 'yellow'
        }

        if(proyeksi['1'].diff2 > 99){
          this.colorProF3pdDiff2 = 'green'
        } else if(proyeksi['1'].diff2 < 95){
          this.colorProF3pdDiff2 = 'red'
        }else{
          this.colorProF3pdDiff1 = 'yellow'
        }

        this.dataPro.fid_bl = proyeksi['2'].bl_FPD
        this.dataPro.fid_bs = proyeksi['2'].bs_FPD
        this.dataPro.fid_dbl = proyeksi['2'].dbl_FPD
        this.dataPro.fid_diff1 = proyeksi['2'].diff1
        this.dataPro.fid_diff2 = proyeksi['2'].diff2

        if(proyeksi['2'].diff1 > 99){
          this.colorProFidDiff1 = 'green'
        } else if(proyeksi['2'].diff1 < 95){
          this.colorProFidDiff1 = 'red'
        }else{
          this.colorProFidDiff1 = 'yellow'
        }

        if(proyeksi['2'].diff2 > 99){
          this.colorProFidDiff2 = 'green'
        } else if(proyeksi['2'].diff2 < 95){
          this.colorProFidDiff2 = 'red'
        }else{
          this.colorProFidDiff2 = 'yellow'
        }

        this.dataPro.fpd_bl = proyeksi['3'].bl_FPD
        this.dataPro.fpd_bs = proyeksi['3'].bs_FPD
        this.dataPro.fpd_dbl = proyeksi['3'].dbl_FPD
        this.dataPro.fpd_diff1 = proyeksi['3'].diff1
        this.dataPro.fpd_diff2 = proyeksi['3'].diff2

        if(proyeksi['3'].diff1 > 99){
          this.colorProFpdDiff1 = 'green'
        } else if(proyeksi['3'].diff1 < 95){
          this.colorProFpdDiff1 = 'red'
        }else{
          this.colorProFpdDiff1 = 'yellow'
        }

        if(proyeksi['3'].diff2 > 99){
          this.colorProFpdDiff2 = 'green'
        } else if(proyeksi['3'].diff2 < 95){
          this.colorProFpdDiff2 = 'red'
        }else{
          this.colorProFpdDiff2 = 'yellow'
        }

      }
    )
  }

  dataActTarget = {
    "fid_realisasi": null,
    "fid_target": null,

    "fpd_realisasi": null,
    "fpd_target": null,

    "f3pd_realisasi": null,
    "f3pd_target": null,

    "mob_realisasi": null,
    "mob_target": null,
  }

  getDataActTarget(bulan, br_code) {
    let actTargetApi = {
      "app": "muf-dashboard",
      "method": "targetActual",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    let actTarget

    this.service.postApi('post', actTargetApi).subscribe(
      response => {
        actTarget = response.data
        this.dataActTarget.mob_realisasi = actTarget["2"].realisasi;
        this.dataActTarget.mob_target = actTarget['2'].target;
        this.dataActTarget.f3pd_realisasi = actTarget['1'].realisasi;
        this.dataActTarget.f3pd_target = actTarget['1'].target;
        this.dataActTarget.fid_realisasi = actTarget['3'].realisasi;
        this.dataActTarget.fid_target = actTarget['3'].target;
        this.dataActTarget.fpd_realisasi = actTarget['0'].realisasi;
        this.dataActTarget.fpd_target = actTarget['0'].target
      }
    )
  }

  getDataUnit(bulan, br_code) {
    let unitApi = {
      "app": "muf-dashboard",
      "method": "unitBookingIR",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', unitApi).subscribe(
      response => {
        this.unit = response.data
      }
    )
  }

  getDataTotalUnit(bulan, br_code) {
    let totUnitApi = {
      "app": "muf-dashboard",
      "method": "totalUnitByPortofolio",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', totUnitApi).subscribe(
      response => {
        this.totalUnitByPortofolio = response.data
      }
    )
  }

  getDataAmount(bulan, br_code) {
    let amountApi = {
      "app": "muf-dashboard",
      "method": "amountBookingIR",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
      this.service.postApi('post', amountApi).subscribe(
        response => {
          this.amount = response.data
        }
      )
  }

  getDataTotalAmount(bulan, br_code) {
    let totAmountApi = {
      "app": "muf-dashboard",
      "method": "totalAmountByPortofolio",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    this.service.postApi('post', totAmountApi).subscribe(
      response => {
        this.totalAmountByPortofolio = response.data
      }
    )
  }

  getDataActUnit(bulan, br_code){
    let actUnitApi = {
      "app": "muf-dashboard",
      "method": "actualInUnit",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', actUnitApi).subscribe(
      response => {
        this.actualUnit = response.data
      }
    )
  }

  getDataTotActUnit(bulan, br_code){
    let totUnit = {
      "app": "muf-dashboard",
      "method": "totalActualInUnit",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', totUnit).subscribe(
      response => {
        this.totalActualInUnit = response.data
      }
    )
  }

  getDataActAmount(bulan, br_code){
    let actAmount = {
      "app": "muf-dashboard",
      "method": "actualInAmount",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }
    
    this.service.postApi('post', actAmount).subscribe(
      response => {
        this.actualAmount = response.data
      }
    )
  }

  getDataTotActAmount(bulan, br_code){
    let totAmount = {
      "app": "muf-dashboard",
      "method": "totalActualInAmount",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', totAmount).subscribe(
      response => {
        this.totalActualInAmount = response.data
      }
    )
  }

  getDataProAmount(bulan, br_code){
    let proAmount = {
      "app": "muf-dashboard",
      "method": "proyeksiInAmount",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', proAmount).subscribe(
      response => {
        this.proyeksiAmout = response.data
      }
    )
  }

  getTotProAmount(bulan, br_code){
    let totPro = {
      "app": "muf-dashboard",
      "method": "totalProyeksiInAmount",
      "data":
      {
        "bulan": bulan,
        "branch_code": br_code
      }
    }

    this.service.postApi('post', totPro).subscribe(
      response => {
        this.totalProyeksiInAmount = response.data
      }
    )
  }

  onClickSubmit() {
    this.ngOnInit();
    // this.getDataBranch()
  }

  // ngAfterContentInit(){
  //   this.ngOnInit();
  // }

  // getDataMom(bulan,br_code){
  //   var mom={
  //     "app": "muf-dashboard",
  //     "method": "mom",
  //     "data": {
  //         "bulan": bulan,
  //         "branch_code": br_code
  //             }
  //             }
  //   let dataMom;

  //   this.service.postApi('post',mom).subscribe(
  //     resMom=>{
  //       dataMom=resMom;
  //       console.log(dataMom);
  //     }
  //   );

  // }
}
