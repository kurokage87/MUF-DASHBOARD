import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  
  dataCache=JSON.parse('currentUser');

  areaList
  branchList
  portfolioList
  data = {
    "chart": {
      "caption": "Collection Effectiveness Performance",
      "subcaption": "Mandiri Utama Finance",
      "xAxisname": "Month",
      // "pYAxisName": "Amount (In USD)",
      // "sYAxisName": "Profit %",
      "numberSuffix": "%",
      "sNumberSuffix": "%",
      "sYAxisMaxValue": "85",
      "theme": "fusion",
      "exportenabled": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "% Stay",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": [
          {
            "value": "78.74"
          },
          {
            "value": "78.54"
          },
          {
            "value": "78.49"
          },
          {
            "value": "79.58"
          },
          {
            "value": "79.99"
          },
          {
            "value": "79.96"
          },
          {
            "value": "79.92"
          },
          {
            "value": "78.82"
          },
          {
            "value": "78.35"
          },
          {
            "value": "78.95"
          },
          {
            "value": "78.84"
          },
          {
            "value": "78.35"
          },
          {
            "value": "76.27"
          }
        ]
      },
      {
        "seriesname": "% Back TO Current",
        "renderas": "line",
        "data": [
          {
            "value": "5.34"
          },
          {
            "value": "4.40"
          },
          {
            "value": "6.25"
          },
          {
            "value": "4.63"
          },
          {
            "value": "5.42"
          },
          {
            "value": "4.65"
          },
          {
            "value": "4.31"
          },
          {
            "value": "5.87"
          },
          {
            "value": "4.66"
          },
          {
            "value": "5.58"
          },
          {
            "value": "4.40"
          },
          {
            "value": "5.05"
          },
          {
            "value": "3.88"
          }
        ]
      },
      {
        "seriesname": "% Lunas",
        "renderas": "line",
        "data": [
          {
            "value": "4.22"
          },
          {
            "value": "3.49"
          },
          {
            "value": "3.94"
          },
          {
            "value": "3.81"
          },
          {
            "value": "3.76"
          },
          {
            "value": "3.97"
          },
          {
            "value": "3.71"
          },
          {
            "value": "3.77"
          },
          {
            "value": "4.05"
          },
          {
            "value": "4.15"
          },
          {
            "value": "4.26"
          },
          {
            "value": "4.40"
          },
          {
            "value": "3.84"
          }
        ]
      },
      {
        "seriesname": "% Repo",
        "renderas": "line",
        "data": [
          {
            "value": "0.34"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.34"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.31"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.34"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.32"
          }
        ]
      },
      {
        "seriesname": "% Roll Down",
        "renderas": "line",
        "data": [
          {
            "value": "0.56"
          },
          {
            "value": "0.47"
          },
          {
            "value": "0.68"
          },
          {
            "value": "0.55"
          },
          {
            "value": "0.49"
          },
          {
            "value": "0.50"
          },
          {
            "value": "0.40"
          },
          {
            "value": "0.49"
          },
          {
            "value": "0.61"
          },
          {
            "value": "0.49"
          },
          {
            "value": "0.52"
          },
          {
            "value": "0.48"
          },
          {
            "value": "0.52"
          }
        ]
      },
      {
        "seriesname": "% Roll Up",
        "renderas": "line",
        "data": [
          {
            "value": "10.44"
          },
          {
            "value": "12.24"
          },
          {
            "value": "9.94"
          },
          {
            "value": "10.75"
          },
          {
            "value": "9.70"
          },
          {
            "value": "10.20"
          },
          {
            "value": "10.97"
          },
          {
            "value": "10.45"
          },
          {
            "value": "11.63"
          },
          {
            "value": "10.18"
          },
          {
            "value": "11.30"
          },
          {
            "value": "11.03"
          },
          {
            "value": "14.82"
          }
        ]
      },
      {
        "seriesname": "% WO",
        "renderas": "line",
        "data": [
          {
            "value": "0.35"
          },
          {
            "value": "0.33"
          },
          {
            "value": "0.33"
          },
          {
            "value": "0.34"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.41"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.29"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.31"
          },
          {
            "value": "0.31"
          },
          {
            "value": "0.31"
          },
          {
            "value": "0.35"
          }
        ]
      }
    ]
  }

  data_bar = {
    "chart": {
      "caption": "Collection Effectiveness Performance",
      "subcaption": "Mandiri Utama Finance",
      "xaxisname": "Tanggal",
      "yaxisname": "Total",
      "formatnumberscale": "1",
      "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      // "theme": "zune",
      "theme": "fusion",
      "exportenabled": "1",
      // "drawcrossline": "1"
      
    },
    "categories": [
      {
        "category": [
          {
            "label": "31/07/2013"
          },
          {
            "label": "31/08/2013"
          },
          {
            "label": "31/09/2013"
          },
          {
            "label": "31/10/2013"
          },
          {
            "label": "31/11/2013"
          },
          {
            "label": "31/12/2013"
          },
          {
            "label": "31/01/2014"
          },
          {
            "label": "31/02/2014"
          },
          {
            "label": "31/03/2014"
          },
          {
            "label": "31/04/2014"
          },
          {
            "label": "31/05/2014"
          },
          {
            "label": "31/06/2014"
          },
          {
            "label": "31/07/2014"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Back To Current",
        "data": [
          {
            "value": "197441"
          },
          {
            "value": "163748"
          },
          {
            "value": "233020"
          },
          {
            "value": "171986"
          },
          {
            "value": "200883"
          },
          {
            "value": "171557"
          },
          {
            "value": "158964"
          },
          {
            "value": "215329"
          },
          {
            "value": "170109"
          },
          {
            "value": "202633"
          },
          {
            "value": "159278"
          },
          {
            "value": "182338"
          },
          {
            "value": "139875"
          }
        ]
      },
      {
        "seriesname": "Delq Awal",
        "data": [
          {
            "value": "407037"
          },
          {
            "value": "480077"
          },
          {
            "value": "395684"
          },
          {
            "value": "419633"
          },
          {
            "value": "377313"
          },
          {
            "value": "395036"
          },
          {
            "value": "419595"
          },
          {
            "value": "400771"
          },
          {
            "value": "447271"
          },
          {
            "value": "387521"
          },
          {
            "value": "427621"
          },
          {
            "value": "415469"
          },
          {
            "value": "552788"
          },
        ]
      },
      {
        "seriesname": "Delq Akhir",
        "data": [
          {
            "value": "3699"
          },
          {
            "value": "3718.1"
          },
          {
            "value": "3727.6"
          },
          {
            "value": "3713.9"
          },
          {
            "value": "3702.9"
          },
          {
            "value": "3691.7"
          },
          {
            "value": "3688.1"
          },
          {
            "value": "3669.1"
          },
          {
            "value": "3651.9"
          },
          {
            "value": "3632.1"
          },
          {
            "value": "3616.9"
          },
          {
            "value": "3609"
          },
          {
            "value": "3604.7"
          }
        ]
      },
      {
        "seriesname": "Lunas",
        "data": [
          {
            "value": "156282"
          },
          {
            "value": "129838"
          },
          {
            "value": "147015"
          },
          {
            "value": "141394"
          },
          {
            "value": "139146"
          },
          {
            "value": "146657"
          },
          {
            "value": "136967"
          },
          {
            "value": "138354"
          },
          {
            "value": "147873"
          },
          {
            "value": "150787"
          },
          {
            "value": "153993"
          },
          {
            "value": "158852"
          },
          {
            "value": "138485"
          }
        ]
      },
      {
        "seriesname": "Repo",
        "data": [
          {
            "value": "12753"
          },
          {
            "value": "12037"
          },
          {
            "value": "13806"
          },
          {
            "value": "12700"
          },
          {
            "value": "11972"
          },
          {
            "value": "11676"
          },
          {
            "value": "11429"
          },
          {
            "value": "11817"
          },
          {
            "value": "13662"
          },
          {
            "value": "12197"
          },
          {
            "value": "13294"
          },
          {
            "value": "13420"
          },
          {
            "value": "11607"
          }
        ]
      },
      {
        "seriesname": "Roll Down",
        "data": [
          {
            "value": "20763"
          },
          {
            "value": "17544"
          },
          {
            "value": "25171"
          },
          {
            "value": "20381"
          },
          {
            "value": "18071"
          },
          {
            "value": "18568"
          },
          {
            "value": "14865"
          },
          {
            "value": "17957"
          },
          {
            "value": "22399"
          },
          {
            "value": "17815"
          },
          {
            "value": "18914"
          },
          {
            "value": "17295"
          },
          {
            "value": "18568"
          }
        ]
      },
      {
        "seriesname": "Roll Up",
        "data": [
          {
            "value": "386274"
          },
          {
            "value": "462527"
          },
          {
            "value": "370513"
          },
          {
            "value": "399252"
          },
          {
            "value": "359242"
          },
          {
            "value": "376468"
          },
          {
            "value": "404730"
          },
          {
            "value": "382814"
          },
          {
            "value": "424872"
          },
          {
            "value": "369706"
          },
          {
            "value": "408707"
          },
          {
            "value": "396174"
          },
          {
            "value": "594220"
          }
        ]
      },
      {
        "seriesname": "Stay",
        "data": [
          {
            "value": "2912.7"
          },
          {
            "value": "2920.2"
          },
          {
            "value": "2925.9"
          },
          {
            "value": "2955.5"
          },
          {
            "value": "2961.8"
          },
          {
            "value": "2951.7"
          },
          {
            "value": "2947.5"
          },
          {
            "value": "2892"
          },
          {
            "value": "2861.3"
          },
          {
            "value": "2867.7"
          },
          {
            "value": "2851.4"
          },
          {
            "value": "2827.7"
          },
          {
            "value": "2749.2"
          }
        ]
      },
      {
        "seriesname": "WO",
        "data": [
          {
            "value": "12785"
          },
          {
            "value": "12203"
          },
          {
            "value": "12116"
          },
          {
            "value": "12642"
          },
          {
            "value": "11783"
          },
          {
            "value": "15063"
          },
          {
            "value": "13629"
          },
          {
            "value": "10791"
          },
          {
            "value": "11683"
          },
          {
            "value": "11282"
          },
          {
            "value": "11286"
          },
          {
            "value": "11165"
          },
          {
            "value": "12748"
          }
        ]
      }
    ]
  };

  data_2 = {
    "chart": {
      "caption": "AR VS Balance AR",
      // "subcaption": "ACME Inc.",
      "xAxisname": "Month",
      "yaxisname": "Value",
      "exportenabled": "1",
      "xAxisMaxValue" : "1000000000",
      // "xNumberPreffix": "",
      // "sNumberSuffix": "",
      // "sYAxisMaxValue": "70000",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "AR/10",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": [
          {
            "value": "43957"
          },
          {
            "value": "44309"
          },
          {
            "value": "44542"
          },
          {
            "value": "44741"
          },
          {
            "value": "44902"
          },
          {
            "value": "45381"
          },
          {
            "value": "45417"
          },
          {
            "value": "45575"
          },
          {
            "value": "45455"
          },
          {
            "value": "45496"
          },
          {
            "value": "45693"
          },
          {
            "value": "46035"
          },
          {
            "value": "46491"
          }
        ]
      },
      {
        "seriesname": "01. Current",
        "renderAs":"line",
        "data": [
          {
            "value": "359899"
          },
          {
            "value": "355951"
          },
          {
            "value": "365637"
          },
          {
            "value": "367163"
          },
          {
            "value": "372825"
          },
          {
            "value": "376825"
          },
          {
            "value": "370801"
          },
          {
            "value": "376504"
          },
          {
            "value": "366276"
          },
          {
            "value": "373021"
          },
          {
            "value": "369720"
          },
          {
            "value": "374413"
          },
          {
            "value": "358393"
          },

        ]
      },
      {
        "seriesname": "02. 1-30",
        "renderAs":"line",
        "data": [
          {
            "value": "6523.8"
          },
          {
            "value": "7079.4"
          },
          {
            "value": "6523"
          },
          {
            "value": "6629.1"
          },
          {
            "value": "6292.8"
          },
          {
            "value": "6508.5"
          },
          {
            "value": "6955.1"
          },
          {
            "value": "6491.7"
          },
          {
            "value": "7424.6"
          },
          {
            "value": "6749.9"
          },
          {
            "value": "7237.3"
          },
          {
            "value": "7053.4"
          },
          {
            "value": "8854.3"
          }
        ]
      },
      {
        "seriesname": "03. 31-60",
        "renderAs":"line",
        "data": [
          {
            "value": "621679"
          },
          {
            "value": "709455"
          },
          {
            "value": "575732"
          },
          {
            "value": "557393"
          },
          {
            "value": "518614"
          },
          {
            "value": "493283"
          },
          {
            "value": "599567"
          },
          {
            "value": "639573"
          },
          {
            "value": "598376"
          },
          {
            "value": "598665"
          },
          {
            "value": "604285"
          },
          {
            "value": "649432"
          },
          {
            "value": "821940"
          }
        ]
      },
      {
        "seriesname": "04. 61-90",
        "renderAs":"line",
        "data": [
          {
            "value": "228789"
          },
          {
            "value": "312889"
          },
          {
            "value": "258577"
          },
          {
            "value": "217335"
          },
          {
            "value": "217859"
          },
          {
            "value": "198418"
          },
          {
            "value": "246101"
          },
          {
            "value": "270511"
          },
          {
            "value": "242303"
          },
          {
            "value": "262537"
          },
          {
            "value": "252790"
          },
          {
            "value": "257384"
          },
          {
            "value": "294191"
          }
        ]
      },
      {
        "seriesname": "05. 91-120",
        "renderAs":"line",
        "data": [
          {
            "value": "167618"
          },
          {
            "value": "179914"
          },
          {
            "value": "201722"
          },
          {
            "value": "181335"
          },
          {
            "value": "150813"
          },
          {
            "value": "156146"
          },
          {
            "value": "153015"
          },
          {
            "value": "154575"
          },
          {
            "value": "193972"
          },
          {
            "value": "178199"
          },
          {
            "value": "200511"
          },
          {
            "value": "177805"
          },
          {
            "value": "204410"
          }
        ]
      },
      {
        "seriesname": "06. 121-150",
        "renderAs":"line",
        "data": [
          {
            "value": "133732"
          },
          {
            "value": "145690"
          },
          {
            "value": "143292"
          },
          {
            "value": "164674"
          },
          {
            "value": "146949"
          },
          {
            "value": "128620"
          },
          {
            "value": "130087"
          },
          {
            "value": "131078"
          },
          {
            "value": "132802"
          },
          {
            "value": "164369"
          },
          {
            "value": "157956"
          },
          {
            "value": "168340"
          },
          {
            "value": "156410"
          }
        ]
      },
      {
        "seriesname": "07. >150",
        "renderAs":"line",
        "data": [
          {
            "value": "291413"
          },
          {
            "value": "286604"
          },
          {
            "value": "275917"
          },
          {
            "value": "274791"
          },
          {
            "value": "292740"
          },
          {
            "value": "268365"
          },
          {
            "value": "252819"
          },
          {
            "value": "236690"
          },
          {
            "value": "235534"
          },
          {
            "value": "239834"
          },
          {
            "value": "267999"
          },
          {
            "value": "287601"
          },
          {
            "value": "320306"
          }
        ]
      },
    ]
  };

  data_3 = {
    "chart": {
      "caption": "Losses Performance",
      // "subcaption": "ACME Inc.",
      "xaxisname": "Month",
      "yaxisname": "Value",
      "sNumberSuffix":"%",
      "sYAxisMaxValue":"4.50",
      "numberprefix": "",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "LOR/10",
        "data": [
          {
            "value": "49968"
          },
          {
            "value": "45647"
          },
          {
            "value": "44135"
          },
          {
            "value": "39045"
          },
          {
            "value": "37447"
          },
          {
            "value": "44190"
          },
          {
            "value": "38810"
          },
          {
            "value": "38482"
          },
          {
            "value": "50175"
          },
          {
            "value": "44487"
          },
          {
            "value": "48487"
          },
          {
            "value": "54287"
          },
          {
            "value": "43044"
          }
        ]
      },
      {
        "seriesname": "WO/10",
        "data": [
          {
            "value": "117285"
          },
          {
            "value": "107772"
          },
          {
            "value": "110014"
          },
          {
            "value": "108939"
          },
          {
            "value": "100435"
          },
          {
            "value": "128245"
          },
          {
            "value": "117488"
          },
          {
            "value": "96769"
          },
          {
            "value": "101766"
          },
          {
            "value": "99300"
          },
          {
            "value": "102183"
          },
          {
            "value": "101443"
          },
          {
            "value": "117659"
          }
        ]
      },
      {
        "seriesname": "NCL Net/10",
        "data": [
          {
            "value": "19490"
          },
          {
            "value": "18054"
          },
          {
            "value": "19163"
          },
          {
            "value": "20929"
          },
          {
            "value": "17860"
          },
          {
            "value": "26224"
          },
          {
            "value": "15528"
          },
          {
            "value": "16982"
          },
          {
            "value": "16202"
          },
          {
            "value": "17783"
          },
          {
            "value": "14950"
          },
          {
            "value": "17007"
          },
          {
            "value": "14851"
          }
        ]
      },
      {
        "seriesname": "NCL %",
        "parentYAxis": "S",
        "renderAs" : "Line",
        "data": [
          {
            "value": "3.94"
          },
          {
            "value": "3.56"
          },
          {
            "value": "3.65"
          },
          {
            "value": "3.31"
          },
          {
            "value": "3.21"
          },
          {
            "value": "3.76"
          },
          {
            "value": "3.60"
          },
          {
            "value": "3.34"
          },
          {
            "value": "3.46"
          },
          {
            "value": "3.32"
          },
          {
            "value":"3.46"
          },
          {
            "value": "3.63"
          },
          {
            "value": "3.66"
          }
        ]
      }
    ]
  };

  data_line = {
    "chart": {
      "caption": "UNIT Repo By OVD",
      "yaxisname": "Month",
      // "xAxisMaxValue" : "8000",
      // "subcaption": "2012-2016",
      "showhovereffect": "1",
      // "numbersuffix": "%",
      "drawcrossline": "1",
      "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "> 90",
        "data": [
          {
            "value": "3617"
          },
          {
            "value": "2921"
          },
          {
            "value": "3463"
          },
          {
            "value": "3477"
          },
          {
            "value": "3063"
          },
          {
            "value": "2965"
          },
          {
            "value": "2519"
          },
          {
            "value": "2388"
          },
          {
            "value": "2733"
          },
          {
            "value": "2541"
          },
          {
            "value": "2801"
          },
          {
            "value": "2816"
          },
          {
            "value": "2526"
          }
        ]
      },
      {
        "seriesname": "61 - 90",
        "data": [
          {
            "value": "2530"
          },
          {
            "value": "2549"
          },
          {
            "value": "3045"
          },
          {
            "value": "2436"
          },
          {
            "value": "2103"
          },
          {
            "value": "2129"
          },
          {
            "value": "1945"
          },
          {
            "value": "2470"
          },
          {
            "value": "2588"
          },
          {
            "value": "2251"
          },
          {
            "value": "2741"
          },
          {
            "value": "2563"
          },
          {
            "value": "2349"
          }
        ]
      },
      {
        "seriesname": "31 - 60",
        "data": [
          {
            "value": "5618"
          },
          {
            "value": "5912"
          },
          {
            "value": "6191"
          },
          {
            "value": "5755"
          },
          {
            "value": "5741"
          },
          {
            "value": "5316"
          },
          {
            "value": "5891"
          },
          {
            "value": "5734"
          },
          {
            "value": "6727"
          },
          {
            "value": "6217"
          },
          {
            "value": "6510"
          },
          {
            "value": "6709"
          },
          {
            "value": "5209"
          }
        ]
      },
      {
        "seriesname": "8 - 30",
        "data": [
          {
            "value": "920"
          },
          {
            "value": "603"
          },
          {
            "value": "1024"
          },
          {
            "value": "954"
          },
          {
            "value": "966"
          },
          {
            "value": "1147"
          },
          {
            "value": "991"
          },
          {
            "value": "1157"
          },
          {
            "value": "1529"
          },
          {
            "value": "1097"
          },
          {
            "value": "1131"
          },
          {
            "value": "1231"
          },
          {
            "value": "1450"
          }
        ]
      },
      {
        "seriesname": "1 - 7",
        "data": [
          {
            "value": "32"
          },
          {
            "value": "31"
          },
          {
            "value": "47"
          },
          {
            "value": "35"
          },
          {
            "value": "52"
          },
          {
            "value": "45"
          },
          {
            "value": "39"
          },
          {
            "value": "34"
          },
          {
            "value": "36"
          },
          {
            "value": "55"
          },
          {
            "value": "52"
          },
          {
            "value": "28"
          },
          {
            "value": "37"
          }
        ]
      },
      {
        "seriesname": "Current",
        "data": [
          {
            "value": "28"
          },
          {
            "value": "18"
          },
          {
            "value": "25"
          },
          {
            "value": "28"
          },
          {
            "value": "37"
          },
          {
            "value": "29"
          },
          {
            "value": "39"
          },
          {
            "value": "25"
          },
          {
            "value": "34"
          },
          {
            "value": "25"
          },
          {
            "value": "35"
          },
          {
            "value": "32"
          },
          {
            "value": "26"
          }
        ]
      },
    ]
  };

  data_line2 = {
    "chart": {
      "caption": "AMOUNT Repo By OVD",
      "yaxisname": "Month",
      // "subcaption": "2012-2016",
      "showhovereffect": "1",
      "numbersuffix": "%",
      "drawcrossline": "1",
      "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "> 90/10",
        "data": [
          {
            "value": "55116"
          },
          {
            "value": "44253"
          },
          {
            "value": "53814"
          },
          {
            "value": "48030"
          },
          {
            "value": "42748"
          },
          {
            "value": "44404"
          },
          {
            "value": "37945"
          },
          {
            "value": "32265"
          },
          {
            "value": "45989"
          },
          {
            "value": "39043"
          },
          {
            "value": "42497"
          },
          {
            "value": "44143"
          },
          {
            "value": "32813"
          }
        ]
      },
      {
        "seriesname": "61 - 90/10",
        "data": [
          {
            "value": "38785"
          },
          {
            "value": "35398"
          },
          {
            "value": "45990"
          },
          {
            "value": "39681"
          },
          {
            "value": "37245"
          },
          {
            "value": "32619"
          },
          {
            "value": "28734"
          },
          {
            "value": "38673"
          },
          {
            "value": "44995"
          },
          {
            "value": "34172"
          },
          {
            "value": "44309"
          },
          {
            "value": "41082"
          },
          {
            "value": "38433"
          }
        ]
      },
      {
        "seriesname": "31 - 60/10",
        "data": [
          {
            "value": "75231"
          },
          {
            "value": "74821"
          },
          {
            "value": "82344"
          },
          {
            "value": "73898"
          },
          {
            "value": "73961"
          },
          {
            "value": "86222"
          },
          {
            "value": "80831"
          },
          {
            "value": "78025"
          },
          {
            "value": "95354"
          },
          {
            "value": "88941"
          },
          {
            "value": "88869"
          },
          {
            "value": "104113"
          },
          {
            "value": "80958"
          }
        ]
      },
      {
        "seriesname": "8 - 30/10",
        "data": [
          {
            "value": "10272"
          },
          {
            "value": "6817"
          },
          {
            "value": "12074"
          },
          {
            "value": "11960"
          },
          {
            "value": "12448"
          },
          {
            "value": "14552"
          },
          {
            "value": "11081"
          },
          {
            "value": "15297"
          },
          {
            "value": "19967"
          },
          {
            "value": "13748"
          },
          {
            "value": "14173"
          },
          {
            "value": "15739"
          },
          {
            "value": "19696"
          }
        ]
      },
      {
        "seriesname": "1 - 7/10",
        "data": [
          {
            "value": "639"
          },
          {
            "value": "324"
          },
          {
            "value": "495"
          },
          {
            "value": "421"
          },
          {
            "value": "740"
          },
          {
            "value": "446"
          },
          {
            "value": "751"
          },
          {
            "value": "421"
          },
          {
            "value": "626"
          },
          {
            "value": "563"
          },
          {
            "value": "920"
          },
          {
            "value": "504"
          },
          {
            "value": "756"
          }
        ]
      },
      {
        "seriesname": "Current",
        "data": [
          {
            "value": "688"
          },
          {
            "value": "361"
          },
          {
            "value": "209"
          },
          {
            "value": "379"
          },
          {
            "value": "601"
          },
          {
            "value": "577"
          },
          {
            "value": "643"
          },
          {
            "value": "300"
          },
          {
            "value": "420"
          },
          {
            "value": "472"
          },
          {
            "value": "335"
          },
          {
            "value": "349"
          },
          {
            "value": "612"
          }
        ]
      },
    ]
  };

  data_stock = {
    "chart": {
      "caption": "Collection Effectiveness Performance",
      "subcaption": "Mandiri Utama Finance",
      "xaxisname": "Month",
      "yaxisname": "Total",
      "formatnumberscale": "1",
      "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      "theme": "fusion",
      "exportenabled": "1",
      // "drawcrossline": "1"
      
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "REPO",
        "data": [
          {
            "value": "12753"
          },
          {
            "value": "12038"
          },
          {
            "value": "13808"
          },
          {
            "value": "12702"
          },
          {
            "value": "11973"
          },
          {
            "value": "11678"
          },
          {
            "value": "11430"
          },
          {
            "value": "11819"
          },
          {
            "value": "13662"
          },
          {
            "value": "13662"
          },
          {
            "value": "12198"
          },
          {
            "value": "13294"
          },
          {
            "value": "13420"
          }
        ]
      },
      {
        "seriesname": "SOLD",
        "data": [
          {
            "value": "14291"
          },
          {
            "value": "10708"
          },
          {
            "value": "14444"
          },
          {
            "value": "13952"
          },
          {
            "value": "12253"
          },
          {
            "value": "12324"
          },
          {
            "value": "11066"
          },
          {
            "value": "11570"
          },
          {
            "value": "12050"
          },
          {
            "value": "13768"
          },
          {
            "value": "12860"
          },
          {
            "value": "12834"
          },
          {
            "value": "11350"
          },
        ]
      },
      {
        "seriesname": "Stock",
        "data": [
          {
            "value": "9206"
          },
          {
            "value": "10522"
          },
          {
            "value": "3875"
          },
          {
            "value": "8965"
          },
          {
            "value": "8685"
          },
          {
            "value": "8030"
          },
          {
            "value": "8367"
          },
          {
            "value": "8604"
          },
          {
            "value": "10204"
          },
          {
            "value": "8606"
          },
          {
            "value": "9030"
          },
          {
            "value": "3586"
          },
          {
            "value": "9830"
          }
        ]
      },
    ]
  }

  data_stack_coloumn = {
    "chart": {
      "caption": "REPO By PORTFOLIO",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "HONDA",
        "data": [
          {
            "value": "20.79"
          },
          {
            "value": "19.60"
          },
          {
            "value": "20.10"
          },
          {
            "value": "20.22"
          },
          {
            "value": "19.91"
          },
          {
            "value": "20.11"
          },
          {
            "value": "20.10"
          },
          {
            "value": "20.04"
          },
          {
            "value": "20.28"
          },
          {
            "value": "20.56"
          },
          {
            "value": "20.63"
          },
          {
            "value": "20.89"
          },
          {
            "value": "21.73"
          }
        ]
      },
      {
        "seriesname": "YAMAHA",
        "data": [
          {
            "value": "18.96"
          },
          {
            "value": "18.03"
          },
          {
            "value": "17.11"
          },
          {
            "value": "16.89"
          },
          {
            "value": "16.63"
          },
          {
            "value": "17.51"
          },
          {
            "value": "16.54"
          },
          {
            "value": "16.58"
          },
          {
            "value": "17.00"
          },
          {
            "value": "17.47"
          },
          {
            "value": "18.31"
          },
          {
            "value": "17.19"
          },
          {
            "value": "16.89"
          }
        ]
      },
      {
        "seriesname": "SUZUKI",
        "data": [
          {
            "value": "5.32"
          },
          {
            "value": "5.61"
          },
          {
            "value": "5.50"
          },
          {
            "value": "6.03"
          },
          {
            "value": "5.66"
          },
          {
            "value": "5.45"
          },
          {
            "value": "5.34"
          },
          {
            "value": "6.12"
          },
          {
            "value": "6.13"
          },
          {
            "value": "5.89"
          },
          {
            "value": "5.96"
          },
          {
            "value": "6.04"
          },
          {
            "value": "5.67"
          }
        ]
      },
      {
        "seriesname": "UMCY",
        "data": [
          {
            "value": "42.51"
          },
          {
            "value": "44.77"
          },
          {
            "value": "45.34"
          },
          {
            "value": "45.18"
          },
          {
            "value": "46.44"
          },
          {
            "value": "44.82"
          },
          {
            "value": "47.13"
          },
          {
            "value": "46.43"
          },
          {
            "value": "46.00"
          },
          {
            "value": "45.26"
          },
          {
            "value" : "44.63"
          },
          {
            "value" : "45.12"
          },
          {
            "value" : "45.31"
          }
        ]
      },
      {
        "seriesname": "UCAR",
        "data": [
          {
            "value": "2.02"
          },
          {
            "value": "1.89"
          },
          {
            "value": "2.26"
          },
          {
            "value": "2.36"
          },
          {
            "value": "2.48"
          },
          {
            "value": "2.52"
          },
          {
            "value": "2.16"
          },
          {
            "value": "2.33"
          },
          {
            "value": "2.11"
          },
          {
            "value": "2.66"
          },
          {
            "value": "2.51"
          },
          {
            "value": "2.74"
          },
          {
            "value": "2.25"
          }
        ]
      },
      {
        "seriesname": "NCAR",
        "data": [
          {
            "value": "3.94"
          },
          {
            "value": "3.62"
          },
          {
            "value": "3.53"
          },
          {
            "value": "3.39"
          },
          {
            "value": "3.36"
          },
          {
            "value": "4.01"
          },
          {
            "value": "3.51"
          },
          {
            "value": "3.38"
          },
          {
            "value" : " 3.78"
          },
          {
            "value": "3.50"
          },
          {
            "value": "3.43"
          },
          {
            "value": "3.96"
          },
          {
            "value": "4.16"
          },
        ]
      },
      {
        "seriesname": "NON AISI",
        "data": [
          {
            "value": "5.94"
          },
          {
            "value": "5.99"
          },
          {
            "value": "5.84"
          },
          {
            "value": "5.54"
          },
          {
            "value": "5.19"
          },
          {
            "value": "5.25"
          },
          {
            "value": "4.86"
          },
          {
            "value": "4.79"
          },
          {
            "value": "4.41"
          },
          {
            "value": "4.30"
          },
          {
            "value": "4.18"
          },
          {
            "value": "3.78"
          },
          {
            "value": "3.70"
          }
        ]
      },
      {
        "seriesname": "OTHER AISI",
        "data": [
          {
            "value": "0.51"
          },
          {
            "value": "0.48"
          },
          {
            "value": "0.32"
          },
          {
            "value": "0.39"
          },
          {
            "value": "0.33"
          },
          {
            "value": "0.33"
          },
          {
            "value": "0.36"
          },
          {
            "value": "0.34"
          },
          {
            "value": "0.29"
          },
          {
            "value": "0.35"
          },
          {
            "value": "0.35"
          },
          {
            "value": "0.28"
          },
          {
            "value": "0.28"
          }
        ]
      }
    ]
  };

  data_stack_coloumn2 = {
    "chart": {
      "caption": "REPO By Object Year",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "2014",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "0.04"
          },
          {
            "value": "0.53"
          },
          {
            "value": "1.89"
          },
          {
            "value": "4.26"
          },
          {
            "value": "7.40"
          },
          {
            "value": "10.70"
          },
        ]
      },
      {
        "seriesname": "2013",
        "data": [
          {
            "value": "6.51"
          },
          {
            "value": "9.21"
          },
          {
            "value": "12.46"
          },
          {
            "value": "15.85"
          },
          {
            "value": "18.87"
          },
          {
            "value": "22.89"
          },
          {
            "value": "26.61"
          },
          {
            "value": "29.30"
          },
          {
            "value": "32.40"
          },
          {
            "value": "33.87"
          },
          {
            "value": "33.68"
          },
          {
            "value": "31.78"
          },
          {
            "value": "29.98"
          }
        ]
      },
      {
        "seriesname": "2012",
        "data": [
          {
            "value": "32.16"
          },
          {
            "value": "31.43"
          },
          {
            "value": "28.95"
          },
          {
            "value": "26.93"
          },
          {
            "value": "26.24"
          },
          {
            "value": "24.42"
          },
          {
            "value": "21.79"
          },
          {
            "value": "20.84"
          },
          {
            "value": "19.20"
          },
          {
            "value": "17.80"
          },
          {
            "value": "17.06"
          },
          {
            "value": "15.65"
          },
          {
            "value": "15.75"
          }
        ]
      },
      {
        "seriesname": "2011",
        "data": [
          {
            "value": "26.54"
          },
          {
            "value": "25.57"
          },
          {
            "value": "23.94"
          },
          {
            "value": "23.28"
          },
          {
            "value": "21.05"
          },
          {
            "value": "20.66"
          },
          {
            "value": "19.38"
          },
          {
            "value": "17.53"
          },
          {
            "value": "16.84"
          },
          {
            "value": "16.72"
          },
          {
            "value" : "15.36"
          },
          {
            "value" : "15.41"
          },
          {
            "value" : "14.52"
          }
        ]
      },
      {
        "seriesname": "2010",
        "data": [
          {
            "value": "13.23"
          },
          {
            "value": "13.31"
          },
          {
            "value": "13.20"
          },
          {
            "value": "13.23"
          },
          {
            "value": "12.64"
          },
          {
            "value": "12.37"
          },
          {
            "value": "12.18"
          },
          {
            "value": "12.44"
          },
          {
            "value" : "12.14"
          },
          {
            "value": "11.14"
          },
          {
            "value": "10.88"
          },
          {
            "value": "11.62"
          },
          {
            "value": "11.70"
          },
        ]
      },
      {
        "seriesname": "2009",
        "data": [
          {
            "value": "7.02"
          },
          {
            "value": "6.78"
          },
          {
            "value": "7.20"
          },
          {
            "value": "7.01"
          },
          {
            "value": "7.24"
          },
          {
            "value": "6.78"
          },
          {
            "value": "7.24"
          },
          {
            "value": "7.19"
          },
          {
            "value": "6.72"
          },
          {
            "value": "6.31"
          },
          {
            "value": "6.82"
          },
          {
            "value": "6.49"
          },
          {
            "value": "6.33"
          }
        ]
      },
      {
        "seriesname": "2008",
        "data": [
          {
            "value": "6.56"
          },
          {
            "value": "5.97"
          },
          {
            "value": "6.33"
          },
          {
            "value": "6.07"
          },
          {
            "value": "6.54"
          },
          {
            "value": "5.69"
          },
          {
            "value": "5.75"
          },
          {
            "value": "5.63"
          },
          {
            "value": "5.52"
          },
          {
            "value": "5.39"
          },
          {
            "value": "5.52"
          },
          {
            "value": "5.03"
          },
          {
            "value": "4.93"
          }
        ]
      },
      {
        "seriesname": "2007",
        "data": [
          {
            "value": "3.53"
          },
          {
            "value": "3.41"
          },
          {
            "value": "3.51"
          },
          {
            "value": "3.50"
          },
          {
            "value": "3.32"
          },
          {
            "value": "3.25"
          },
          {
            "value": "3.07"
          },
          {
            "value": "3.32"
          },
          {
            "value": "3.05"
          },
          {
            "value": "3.24"
          },
          {
            "value": "2.78"
          },
          {
            "value": "3.17"
          },
          {
            "value": "2.73"
          }
        ]
      },
      {
        "seriesname": "2006",
        "data": [
          {
            "value": "2.10"
          },
          {
            "value": "2.03"
          },
          {
            "value": "2.13"
          },
          {
            "value": "1.87"
          },
          {
            "value": "1.85"
          },
          {
            "value": "1.72"
          },
          {
            "value": "2.01"
          },
          {
            "value": "1.90"
          },
          {
            "value": "1.74"
          },
          {
            "value": "1.82"
          },
          {
            "value": "1.87"
          },
          {
            "value": "1.70"
          },
          {
            "value": "1.67"
          }
        ]
      },
      {
        "seriesname": "2005",
        "data": [
          {
            "value": "1.55"
          },
          {
            "value": "1.46"
          },
          {
            "value": "1.41"
          },
          {
            "value": "1.55"
          },
          {
            "value": "1.54"
          },
          {
            "value": "1.49"
          },
          {
            "value": "1.28"
          },
          {
            "value": "1.21"
          },
          {
            "value": "1.22"
          },
          {
            "value": "1.26"
          },
          {
            "value": "1.18"
          },
          {
            "value": "1.27"
          },
          {
            "value": "1.23"
          }
        ]
      },
      {
        "seriesname": "2004",
        "data": [
          {
            "value": "0.64"
          },
          {
            "value": "0.67"
          },
          {
            "value": "0.72"
          },
          {
            "value": "0.54"
          },
          {
            "value": "0.62"
          },
          {
            "value": "0.55"
          },
          {
            "value": "0.57"
          },
          {
            "value": "0.48"
          },
          {
            "value": "0.57"
          },
          {
            "value": "0.46"
          },
          {
            "value": "0.50"
          },
          {
            "value": "0.39"
          },
          {
            "value": "0.31"
          }
          
        ]
      },
      {
        "seriesname": "2003",
        "data": [
          {
            "value": "0.16"
          },
          {
            "value": "0.15"
          },
          {
            "value": "0.16"
          },
          {
            "value": "0.16"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.18"
          },
          {
            "value": "0.14"
          },
          {
            "value": "0.11"
          },
          {
            "value": "0.10"
          },
          {
            "value": "0.11"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.08"
          },
          {
            "value": "0.14"
          }
        ]
      }
    ]
  };

  data_stack_coloumn3 = {
    "chart": {
      "caption": "REPO By LAST INSTALLMENT NUMBER",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "<= 6",
        "data": [
          {
            "value": "41.71"
          },
          {
            "value": "43.04"
          },
          {
            "value": "42.32"
          },
          {
            "value": "44.59"
          },
          {
            "value": "46.40"
          },
          {
            "value": "47.88"
          },
          {
            "value": "51.50"
          },
          {
            "value": "50.63"
          },
          {
            "value": "51.27"
          },
          {
            "value": "50.89"
          },
          {
            "value": "49.65"
          },
          {
            "value": "49.10"
          },
          {
            "value": "49.78"
          }
        ]
      },
      {
        "seriesname": "7 - 12",
        "data": [
          {
            "value": "28.51"
          },
          {
            "value": "27.29"
          },
          {
            "value": "28.08"
          },
          {
            "value": "26.22"
          },
          {
            "value" : "26.28"
          },
          {
            "value": "25.18"
          },
          {
            "value": "23.49"
          },
          {
            "value": "24.82"
          },
          {
            "value": "24.70"
          },
          {
            "value": "25.99"
          },
          {
            "value": "26.50"
          },
          {
            "value": "27.71"
          },
          {
            "value": "26.53"
          }
        ]
      },
      {
        "seriesname": "13 - 24",
        "data": [
          {
            "value": "25.05"
          },
          {
            "value": "25.29"
          },
          {
            "value": "25.19"
          },
          {
            "value": "24.61"
          },
          {
            "value": "23.10"
          },
          {
            "value": "22.38"
          },
          {
            "value": "20.73"
          },
          {
            "value": "20.09"
          },
          {
            "value": "19.70"
          },
          {
            "value": "18.69"
          },
          {
            "value": "19.20"
          },
          {
            "value": "18.59"
          },
          {
            "value": "18.69"
          }
        ]
      },
      {
        "seriesname": "25 - 36",
        "data": [
          {
            "value": "4.63"
          },
          {
            "value": "4.29"
          },
          {
            "value": "4.29"
          },
          {
            "value": "4.45"
          },
          {
            "value": "4.15"
          },
          {
            "value": "4.38"
          },
          {
            "value": "4.19"
          },
          {
            "value": "4.36"
          },
          {
            "value": "4.14"
          },
          {
            "value": "4.30"
          },
          {
            "value" : "4.50"
          },
          {
            "value" : "4.42"
          },
          {
            "value" : "4.83"
          }
        ]
      },
      {
        "seriesname": "37 - 48",
        "data": [
          {
            "value": "0.10"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.10"
          },
          {
            "value": "0.13"
          },
          {
            "value": "0.07"
          },
          {
            "value": "0.18"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.11"
          },
          {
            "value": "0.19"
          },
          {
            "value": "0.13"
          },
          {
            "value": "0.15"
          },
          {
            "value": "0.18"
          },
          {
            "value": "0.17"
          }
        ]
      },
      {
        "seriesname": "> 48",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
        ]
      },
    ]
  };

  data_stack_coloumn4 = {
    "chart": {
      "caption": "REPO By GROUP DP",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "01. = 0%",
        "data": [
          {
            "value": "0.05"
          },
          {
            "value": "0.02"
          },
          {
            "value": "0.04"
          },
          {
            "value": "0.11"
          },
          {
            "value": "0.03"
          },
          {
            "value": "0.23"
          },
          {
            "value": "0.03"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.01"
          },
          {
            "value": "0.05"
          },
          {
            "value": "0.11"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.01"
          }
        ]
      },
      {
        "seriesname": "02. < 5%",
        "data": [
          {
            "value": "0.15"
          },
          {
            "value": "0.06"
          },
          {
            "value": "0.07"
          },
          {
            "value": "0.07"
          },
          {
            "value": "0.06"
          },
          {
            "value": "0.07"
          },
          {
            "value": "0.05"
          },
          {
            "value": "0.03"
          },
          {
            "value": "0.03"
          },
          {
            "value": "0.04"
          },
          {
            "value": "0.02"
          },
          {
            "value": "0.01"
          },
          {
            "value": "0.02"
          }
        ]
      },
      {
        "seriesname": "03. 5 - < 10%",
        "data": [
          {
            "value": "23.36"
          },
          {
            "value": "20.74"
          },
          {
            "value": "18.30"
          },
          {
            "value": "16.78"
          },
          {
            "value": "15.27"
          },
          {
            "value": "13.64"
          },
          {
            "value": "10.84"
          },
          {
            "value": "9.76"
          },
          {
            "value": "8.92"
          },
          {
            "value": "7.61"
          },
          {
            "value": "6.85"
          },
          {
            "value": "6.10"
          },
          {
            "value": "5.76"
          }
        ]
      },
      {
        "seriesname": "04. 10 - < 15%",
        "data": [
          {
            "value": "23.04"
          },
          {
            "value": "20.81"
          },
          {
            "value": "18.60"
          },
          {
            "value": "16.70"
          },
          {
            "value": "14.25"
          },
          {
            "value": "13.02"
          },
          {
            "value": "10.53"
          },
          {
            "value": "9.19"
          },
          {
            "value": "7.96"
          },
          {
            "value": "6.80"
          },
          {
            "value" : "6.34"
          },
          {
            "value" : "5.42"
          },
          {
            "value" : "5.43"
          }
        ]
      },
      {
        "seriesname": "05. 15 - 20%",
        "data": [
          {
            "value": "13.02"
          },
          {
            "value": "11.35"
          },
          {
            "value": "10.49"
          },
          {
            "value": "8.87"
          },
          {
            "value": "8.04"
          },
          {
            "value": "7.21"
          },
          {
            "value": "6.09"
          },
          {
            "value": "5.36"
          },
          {
            "value": "4.52"
          },
          {
            "value": "3.88"
          },
          {
            "value": "3.81"
          },
          {
            "value": "3.56"
          },
          {
            "value": "3.14"
          }
        ]
      },
      {
        "seriesname": "06. 20 - < 25%",
        "data": [
          {
            "value": "25.28"
          },
          {
            "value": "30.96"
          },
          {
            "value": "34.93"
          },
          {
            "value": "38.99"
          },
          {
            "value": "42.19"
          },
          {
            "value": "44.74"
          },
          {
            "value": "50.50"
          },
          {
            "value": "52.12"
          },
          {
            "value" : " 54.74"
          },
          {
            "value": "57.19"
          },
          {
            "value": "57.83"
          },
          {
            "value": "58.12"
          },
          {
            "value": "58.70"
          },
        ]
      },
      {
        "seriesname": "07. 25 - < 30%",
        "data": [
          {
            "value": "8.40"
          },
          {
            "value": "9.11"
          },
          {
            "value": "10.30"
          },
          {
            "value": "11.20"
          },
          {
            "value": "12.42"
          },
          {
            "value": "12.79"
          },
          {
            "value": "13.50"
          },
          {
            "value": "14.57"
          },
          {
            "value": "14.65"
          },
          {
            "value": "15.46"
          },
          {
            "value": "15.67"
          },
          {
            "value": "15.91"
          },
          {
            "value": "15.97"
          }
        ]
      },
      {
        "seriesname": "08. 30 - < 35%",
        "data": [
          {
            "value": "3.58"
          },
          {
            "value": "4.23"
          },
          {
            "value": "4.57"
          },
          {
            "value": "4.26"
          },
          {
            "value": "4.77"
          },
          {
            "value": "5.16"
          },
          {
            "value": "5.16"
          },
          {
            "value": "5.38"
          },
          {
            "value": "6.02"
          },
          {
            "value": "5.74"
          },
          {
            "value": "5.92"
          },
          {
            "value": "6.48"
          },
          {
            "value": "6.64"
          }
        ]
      },
      {
        "seriesname": "09. 35 - < 40%",
        "data": [
          {
            "value": "1.40"
          },
          {
            "value": "1.58"
          },
          {
            "value": "1.60"
          },
          {
            "value": "1.72"
          },
          {
            "value": "1.70"
          },
          {
            "value": "1.79"
          },
          {
            "value": "1.90"
          },
          {
            "value": "2.01"
          },
          {
            "value": "1.57"
          },
          {
            "value": "1.84"
          },
          {
            "value": "1.96"
          },
          {
            "value": "2.26"
          },
          {
            "value": "2.45"
          }
        ]
      },
      {
        "seriesname": "10. >= 40%",
        "data": [
          {
            "value": "1.18"
          },
          {
            "value": "1.15"
          },
          {
            "value": "1.12"
          },
          {
            "value": "1.30"
          },
          {
            "value": "1.27"
          },
          {
            "value": "1.34"
          },
          {
            "value": "1.39"
          },
          {
            "value": "1.57"
          },
          {
            "value": "1.58"
          },
          {
            "value": "1.40"
          },
          {
            "value": "1.50"
          },
          {
            "value": "2.03"
          },
          {
            "value": "1.89"
          }
        ]
      }
    ]
  };

  data_stack_coloumn5 = {
    "chart": {
      "caption": "UNIT SOLD By OBJECT YEARS",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "2014",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "0.01"
          },
          {
            "value": "0.17"
          },
          {
            "value": "0.79"
          },
          {
            "value": "2.62"
          },
          {
            "value": "5.09"
          },
          {
            "value": "8.18"
          },
        ]
      },
      {
        "seriesname": "2013",
        "data": [
          {
            "value": "3.99"
          },
          {
            "value": "5.59"
          },
          {
            "value": "9.39"
          },
          {
            "value": "13.46"
          },
          {
            "value": "17.18"
          },
          {
            "value": "20.77"
          },
          {
            "value": "24.21"
          },
          {
            "value": "27.35"
          },
          {
            "value": "29.48"
          },
          {
            "value": "33.17"
          },
          {
            "value": "34.28"
          },
          {
            "value": "32.94"
          },
          {
            "value": "31.66"
          }
        ]
      },
      {
        "seriesname": "2012",
        "data": [
          {
            "value": "33.21"
          },
          {
            "value": "32.44"
          },
          {
            "value": "30.86"
          },
          {
            "value": "28.39"
          },
          {
            "value": "27.28"
          },
          {
            "value": "25.26"
          },
          {
            "value": "23.81"
          },
          {
            "value": "22.03"
          },
          {
            "value": "20.42"
          },
          {
            "value": "18.29"
          },
          {
            "value": "17.72"
          },
          {
            "value": "16.80"
          },
          {
            "value": "15.71"
          }
        ]
      },
      {
        "seriesname": "2011",
        "data": [
          {
            "value": "27.66"
          },
          {
            "value": "27.03"
          },
          {
            "value": "25.19"
          },
          {
            "value": "23.81"
          },
          {
            "value": "22.25"
          },
          {
            "value": "21.36"
          },
          {
            "value": "20.12"
          },
          {
            "value": "18.69"
          },
          {
            "value": "18.05"
          },
          {
            "value": "16.47"
          },
          {
            "value" : "16.15"
          },
          {
            "value" : "15.69"
          },
          {
            "value" : "15.02"
          }
        ]
      },
      {
        "seriesname": "2010",
        "data": [
          {
            "value": "13.44"
          },
          {
            "value": "13.67"
          },
          {
            "value": "13.41"
          },
          {
            "value": "13.27"
          },
          {
            "value": "12.75"
          },
          {
            "value": "12.33"
          },
          {
            "value": "12.38"
          },
          {
            "value": "12.18"
          },
          {
            "value": "12.16"
          },
          {
            "value" : "12.26"
          },
          {
            "value": "10.81"
          },
          {
            "value": "11.19"
          },
          {
            "value": "11.54"
          }
        ]
      },
      {
        "seriesname": "2009",
        "data": [
          {
            "value": "6.73"
          },
          {
            "value": "7.17"
          },
          {
            "value": "6.97"
          },
          {
            "value": "7.03"
          },
          {
            "value": "7.29"
          },
          {
            "value": "6.70"
          },
          {
            "value": "6.94"
          },
          {
            "value": "7.06"
          },
          {
            "value": "6.91"
          },
          {
            "value": "6.68"
          },
          {
            "value": "6.38"
          },
          {
            "value": "6.66"
          },
          {
            "value": "6.60"
          }
        ]
      },
      {
        "seriesname": "2008",
        "data": [
          {
            "value": "6.54"
          },
          {
            "value": "6.30"
          },
          {
            "value": "6.21"
          },
          {
            "value": "6.28"
          },
          {
            "value": "6.12"
          },
          {
            "value": "5.69"
          },
          {
            "value": "5.56"
          },
          {
            "value": "5.88"
          },
          {
            "value": "5.47"
          },
          {
            "value": "5.59"
          },
          {
            "value": "5.44"
          },
          {
            "value": "5.13"
          },
          {
            "value": "5.11"
          }
        ]
      },
      {
        "seriesname": "2007",
        "data": [
          {
            "value": "3.70"
          },
          {
            "value": "3.48"
          },
          {
            "value": "3.65"
          },
          {
            "value": "3.40"
          },
          {
            "value": "3.21"
          },
          {
            "value": "3.48"
          },
          {
            "value": "2.97"
          },
          {
            "value": "3.05"
          },
          {
            "value": "3.39"
          },
          {
            "value": "3.08"
          },
          {
            "value": "3.01"
          },
          {
            "value": "3.04"
          },
          {
            "value": "2.73"
          }
        ]
      },
      {
        "seriesname": "2006",
        "data": [
          {
            "value": "2.16"
          },
          {
            "value": "1.97"
          },
          {
            "value": "2.14"
          },
          {
            "value": "2.13"
          },
          {
            "value": "1.69"
          },
          {
            "value": "1.88"
          },
          {
            "value": "1.74"
          },
          {
            "value": "1.89"
          },
          {
            "value": "1.96"
          },
          {
            "value": "1.81"
          },
          {
            "value": "1.80"
          },
          {
            "value": "1.79"
          },
          {
            "value": "1.78"
          }
        ]
      },
      {
        "seriesname": "2005",
        "data": [
          {
            "value": "1.71"
          },
          {
            "value": "1.56"
          },
          {
            "value": "1.49"
          },
          {
            "value": "1.41"
          },
          {
            "value": "1.53"
          },
          {
            "value": "1.42"
          },
          {
            "value": "1.47"
          },
          {
            "value": "1.25"
          },
          {
            "value": "1.33"
          },
          {
            "value": "1.21"
          },
          {
            "value": "1.21"
          },
          {
            "value": "1.21"
          },
          {
            "value": "1.23"
          }
        ]
      },
      {
        "seriesname": "2004",
        "data": [
          {
            "value": "0.71"
          },
          {
            "value": "0.61"
          },
          {
            "value": "0.61"
          },
          {
            "value": "0.60"
          },
          {
            "value": "0.60"
          },
          {
            "value": "0.67"
          },
          {
            "value": "0.65"
          },
          {
            "value": "0.46"
          },
          {
            "value": "0.55"
          },
          {
            "value": "0.54"
          },
          {
            "value": "0.49"
          },
          {
            "value": "0.37"
          },
          {
            "value": "0.34"
          }
          
        ]
      },
      {
        "seriesname": "2003",
        "data": [
          {
            "value": "0.14"
          },
          {
            "value": "0.21"
          },
          {
            "value": "0.08"
          },
          {
            "value": "0.21"
          },
          {
            "value": "0.10"
          },
          {
            "value": "0.18"
          },
          {
            "value": "0.15"
          },
          {
            "value": "0.16"
          },
          {
            "value": "0.11"
          },
          {
            "value" : "0.11"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.11"
          }
        ]
      }
    ]
  };

  data_stack_coloumn6 = {
    "chart": {
      "caption": "UNIT SOLD By LAST INSTALLMENT NUMBER",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "<= 6",
        "data": [
          {
            "value": "41.28"
          },
          {
            "value": "40.88"
          },
          {
            "value": "42.49"
          },
          {
            "value": "43.49"
          },
          {
            "value": "45.36"
          },
          {
            "value": "47.76"
          },
          {
            "value": "49.45"
          },
          {
            "value": "51.07"
          },
          {
            "value": "50.91"
          },
          {
            "value": "51.49"
          },
          {
            "value": "50.54"
          },
          {
            "value": "49.09"
          },
          {
            "value": "49.07"
          }
        ]
      },
      {
        "seriesname": "7 - 12",
        "data": [
          {
            "value": "29.56"
          },
          {
            "value": "28.41"
          },
          {
            "value": "28.00"
          },
          {
            "value": "27.15"
          },
          {
            "value" : "26.14"
          },
          {
            "value": "25.83"
          },
          {
            "value": "24.04"
          },
          {
            "value": "23.87"
          },
          {
            "value": "24.66"
          },
          {
            "value": "25.12"
          },
          {
            "value": "26.42"
          },
          {
            "value": "27.13"
          },
          {
            "value": "27.07"
          }
        ]
      },
      {
        "seriesname": "13 - 24",
        "data": [
          {
            "value": "25.15"
          },
          {
            "value": "25.95"
          },
          {
            "value": "25.28"
          },
          {
            "value": "24.90"
          },
          {
            "value": "24.09"
          },
          {
            "value": "22.04"
          },
          {
            "value": "22.09"
          },
          {
            "value": "20.61"
          },
          {
            "value": "20.01"
          },
          {
            "value": "19.23"
          },
          {
            "value": "18.58"
          },
          {
            "value": "19.12"
          },
          {
            "value": "18.91"
          }
        ]
      },
      {
        "seriesname": "25 - 36",
        "data": [
          {
            "value": "3.97"
          },
          {
            "value": "4.62"
          },
          {
            "value": "4.13"
          },
          {
            "value": "4.33"
          },
          {
            "value": "4.32"
          },
          {
            "value": "4.25"
          },
          {
            "value": "4.29"
          },
          {
            "value": "4.32"
          },
          {
            "value": "4.30"
          },
          {
            "value": "3.98"
          },
          {
            "value" : "4.34"
          },
          {
            "value" : "4.54"
          },
          {
            "value" : "4.78"
          }
        ]
      },
      {
        "seriesname": "37 - 48",
        "data": [
          {
            "value": "0.04"
          },
          {
            "value": "0.14"
          },
          {
            "value" : "0.09"
          },
          {
            "value": "0.13"
          },
          {
            "value": "0.09"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.14"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.18"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.12"
          },
          {
            "value": "0.18"
          }
        ]
      },
      {
        "seriesname": "> 48",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.01"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
        ]
      },
    ]
  };

  data_stack_coloumn7 = {
    "chart": {
      "caption": "RR PCT By OBJECT YEARS",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "2014",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "58.77"
          },
          {
            "value": "74.42"
          },
          {
            "value": "74.58"
          },
          {
            "value": "70.61"
          },
          {
            "value": "72.91"
          },
          {
            "value": "70.64"
          },
        ]
      },
      {
        "seriesname": "2013",
        "data": [
          {
            "value": "79.25"
          },
          {
            "value": "72.79"
          },
          {
            "value": "74.24"
          },
          {
            "value": "73.82"
          },
          {
            "value": "73.60"
          },
          {
            "value": "76.69"
          },
          {
            "value": "71.76"
          },
          {
            "value": "71.92"
          },
          {
            "value": "74.73"
          },
          {
            "value": "72.60"
          },
          {
            "value": "74.01"
          },
          {
            "value": "72.00"
          },
          {
            "value": "71.85"
          }
        ]
      },
      {
        "seriesname": "2012",
        "data": [
          {
            "value": "73.19"
          },
          {
            "value": "75.21"
          },
          {
            "value": "75.88"
          },
          {
            "value": "76.98"
          },
          {
            "value": "77.09"
          },
          {
            "value": "78.01"
          },
          {
            "value": "77.98"
          },
          {
            "value": "78.73"
          },
          {
            "value": "81.76"
          },
          {
            "value": "80.64"
          },
          {
            "value": "79.08"
          },
          {
            "value": "82.03"
          },
          {
            "value": "78.99"
          }
        ]
      },
      {
        "seriesname": "2011",
        "data": [
          {
            "value": "78.44"
          },
          {
            "value": "79.06"
          },
          {
            "value": "80.27"
          },
          {
            "value": "81.92"
          },
          {
            "value": "84.00"
          },
          {
            "value": "79.53"
          },
          {
            "value": "84.71"
          },
          {
            "value": "84.75"
          },
          {
            "value": "83.37"
          },
          {
            "value": "83.11"
          },
          {
            "value" : "86.64"
          },
          {
            "value" : "86.52"
          },
          {
            "value" : "84.21"
          }
        ]
      },
      {
        "seriesname": "2010",
        "data": [
          {
            "value": "86.22"
          },
          {
            "value": "90.46"
          },
          {
            "value": "86.61"
          },
          {
            "value": "87.12"
          },
          {
            "value": "85.76"
          },
          {
            "value": "79.97"
          },
          {
            "value": "85.10"
          },
          {
            "value": "86.62"
          },
          {
            "value": "81.41"
          },
          {
            "value" : "80.92"
          },
          {
            "value": "82.52"
          },
          {
            "value": "83.54"
          },
          {
            "value": "78.79"
          }
        ]
      },
      {
        "seriesname": "2009",
        "data": [
          {
            "value": "87.77"
          },
          {
            "value": "87.61"
          },
          {
            "value": "88.71"
          },
          {
            "value": "83.94"
          },
          {
            "value": "84.15"
          },
          {
            "value": "86.42"
          },
          {
            "value": "82.46"
          },
          {
            "value": "84.98"
          },
          {
            "value": "83.98"
          },
          {
            "value": "81.70"
          },
          {
            "value": "77.78"
          },
          {
            "value": "80.60"
          },
          {
            "value": "76.51"
          }
        ]
      },
      {
        "seriesname": "2008",
        "data": [
          {
            "value": "74.99"
          },
          {
            "value": "82.49"
          },
          {
            "value": "79.87"
          },
          {
            "value": "81.68"
          },
          {
            "value": "85.77"
          },
          {
            "value": "82.58"
          },
          {
            "value": "81.64"
          },
          {
            "value": "82.23"
          },
          {
            "value": "80.35"
          },
          {
            "value": "78.92"
          },
          {
            "value": "85.88"
          },
          {
            "value": "86.07"
          },
          {
            "value": "80.02"
          }
        ]
      },
      {
        "seriesname": "2007",
        "data": [
          {
            "value": "65.27"
          },
          {
            "value": "82.16"
          },
          {
            "value": "84.06"
          },
          {
            "value": "83.06"
          },
          {
            "value": "82.50"
          },
          {
            "value": "87.68"
          },
          {
            "value": "82.97"
          },
          {
            "value": "85.97"
          },
          {
            "value": "80.58"
          },
          {
            "value": "80.48"
          },
          {
            "value": "90.57"
          },
          {
            "value": "81.80"
          },
          {
            "value": "83.13"
          }
        ]
      },
      {
        "seriesname": "2006",
        "data": [
          {
            "value": "79.97"
          },
          {
            "value": "78.85"
          },
          {
            "value": "85.31"
          },
          {
            "value": "83.01"
          },
          {
            "value": "92.86"
          },
          {
            "value": "84.57"
          },
          {
            "value": "87.48"
          },
          {
            "value": "85.85"
          },
          {
            "value": "88.93"
          },
          {
            "value": "87.41"
          },
          {
            "value": "85.96"
          },
          {
            "value": "89.41"
          },
          {
            "value": "81.49"
          }
        ]
      },
      {
        "seriesname": "2005",
        "data": [
          {
            "value": "84.92"
          },
          {
            "value": "83.37"
          },
          {
            "value": "93.12"
          },
          {
            "value": "86.04"
          },
          {
            "value": "82.54"
          },
          {
            "value": "83.08"
          },
          {
            "value": "81.29"
          },
          {
            "value": "89.13"
          },
          {
            "value": "91.11"
          },
          {
            "value": "92.99"
          },
          {
            "value": "80.87"
          },
          {
            "value": "85.38"
          },
          {
            "value": "85.40"
          }
        ]
      },
      {
        "seriesname": "2004",
        "data": [
          {
            "value": "80.27"
          },
          {
            "value": "79.93"
          },
          {
            "value": "81.04"
          },
          {
            "value": "88.81"
          },
          {
            "value": "83.25"
          },
          {
            "value": "76.12"
          },
          {
            "value": "79.58"
          },
          {
            "value": "79.00"
          },
          {
            "value": "90.21"
          },
          {
            "value": "87.40"
          },
          {
            "value": "91.97"
          },
          {
            "value": "82.78"
          },
          {
            "value": "86.03"
          }
          
        ]
      },
      {
        "seriesname": "2003",
        "data": [
          {
            "value": "93.82"
          },
          {
            "value": "89.01"
          },
          {
            "value": "92.77"
          },
          {
            "value": "92.64"
          },
          {
            "value": "72.86"
          },
          {
            "value": "80.25"
          },
          {
            "value": "75.17"
          },
          {
            "value": "89.74"
          },
          {
            "value": "92.28"
          },
          {
            "value" : "86.96"
          },
          {
            "value": "83.01"
          },
          {
            "value": "86.83"
          },
          {
            "value": "90.26"
          }
        ]
      }
    ]
  };

  data_stack_coloumn8 = {
    "chart": {
      "caption": "RR PCT By LAST INSTALLMENT NUMBER",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jul-13"
          },
          {
            "label": "Aug-13"
          },
          {
            "label": "Sep-13"
          },
          {
            "label": "Okt-13"
          },
          {
            "label": "Nov-13"
          },
          {
            "label": "Des-13"
          },
          {
            "label": "Jan-14"
          },
          {
            "label": "Feb-14"
          },
          {
            "label": "Mar-14"
          },
          {
            "label": "Apr-14"
          },
          {
            "label": "May-14"
          },
          {
            "label": "Jun-14"
          },
          {
            "label": "Jul-14"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "<= 6",
        "data": [
          {
            "value": "71.71"
          },
          {
            "value": "73.78"
          },
          {
            "value": "73.54"
          },
          {
            "value": "72.69"
          },
          {
            "value": "73.89"
          },
          {
            "value": "74.55"
          },
          {
            "value": "72.33"
          },
          {
            "value": "72.57"
          },
          {
            "value": "72.64"
          },
          {
            "value": "71.19"
          },
          {
            "value": "71.99"
          },
          {
            "value": "71.72"
          },
          {
            "value": "68.50"
          }
        ]
      },
      {
        "seriesname": "7 - 12",
        "data": [
          {
            "value": "75.17"
          },
          {
            "value": "77.03"
          },
          {
            "value": "78.35"
          },
          {
            "value": "79.58"
          },
          {
            "value" : "79.62"
          },
          {
            "value": "78.35"
          },
          {
            "value": "76.74"
          },
          {
            "value": "78.16"
          },
          {
            "value": "81.28"
          },
          {
            "value": "78.41"
          },
          {
            "value": "79.12"
          },
          {
            "value": "77.39"
          },
          {
            "value": "76.00"
          }
        ]
      },
      {
        "seriesname": "13 - 24",
        "data": [
          {
            "value": "83.81"
          },
          {
            "value": "85.08"
          },
          {
            "value": "85.46"
          },
          {
            "value": "87.54"
          },
          {
            "value": "86.19"
          },
          {
            "value": "86.65"
          },
          {
            "value": "87.78"
          },
          {
            "value": "89.67"
          },
          {
            "value": "89.01"
          },
          {
            "value": "88.09"
          },
          {
            "value": "87.24"
          },
          {
            "value": "87.92"
          },
          {
            "value": "88.15"
          }
        ]
      },
      {
        "seriesname": "25 - 36",
        "data": [
          {
            "value": "112.51"
          },
          {
            "value": "118.71"
          },
          {
            "value": "110.91"
          },
          {
            "value": "110.06"
          },
          {
            "value": "119.10"
          },
          {
            "value": "106.31"
          },
          {
            "value": "116.57"
          },
          {
            "value": "110.21"
          },
          {
            "value": "116.49"
          },
          {
            "value": "110.27"
          },
          {
            "value": "110.05"
          },
          {
            "value" : "121.58"
          },
          {
            "value" : "107.39"
          }
        ]
      },
      {
        "seriesname": "37 - 48",
        "data": [
          {
            "value": "128.47"
          },
          {
            "value": "150.43"
          },
          {
            "value" : "135.014"
          },
          {
            "value": "151.18"
          },
          {
            "value": "142.62"
          },
          {
            "value": "141.39"
          },
          {
            "value": "115.36"
          },
          {
            "value": "175.69"
          },
          {
            "value": "144.82"
          },
          {
            "value": "153.66"
          },
          {
            "value": "142.56"
          },
          {
            "value": "220.91"
          },
          {
            "value": "149.27"
          }
        ]
      },
      {
        "seriesname": "> 48",
        "data": [
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "183.44"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value" : "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
          {
            "value": "0.00"
          },
        ]
      },
    ]
  };
  
  data_gauge1 = {
    "chart": {
      "numberSuffix" : "%",
      "lowerLimit": "0",
      "upperLimit": "50",
      "theme": "zune",
      "exportenabled": "1",
  },
  "colorRange": {
      "color": [
          {
              "minValue": "0",
              "maxValue": "5",
              "code": "#00FF00"
          },
          {
              "minValue": "5",
              "maxValue": "25",
              "code": "#FFFF00"
          },
          {
              "minValue": "30",
              "maxValue": "50",
              "code": "#FF0000"
          }
      ]
  },
  "dials": {
      "dial": [
          {
              "value": "3.66"
          }
      ]
  }
  }

  data_gauge2 = {
    "chart": {
      "numberSuffix" : "%",
      "lowerLimit": "0",
      "upperLimit": "200000",
      "theme": "zune",
      "exportenabled": "1",
  },
  "colorRange": {
      "color": [
          {
              "minValue": "0",
              "maxValue": "50000",
              "code": "#00FF00"
          },
          {
              "minValue": "50000",
              "maxValue": "100000",
              "code": "#FFFF00"
          },
          {
              "minValue": "100000",
              "maxValue": "120000",
              "code": "#FF0000"
          }
      ]
  },
  "dials": {
      "dial": [
          {
              "value": "145853"
          }
      ]
  }
  }

  data_gauge3 = {
    "chart": {
      "numberSuffix" : "%",
      "lowerLimit": "0",
      "upperLimit": "200000",
      "theme": "zune",
      "exportenabled": "1",
  },
  "colorRange": {
      "color": [
          {
              "minValue": "0",
              "maxValue": "50000",
              "code": "#00FF00"
          },
          {
              "minValue": "50000",
              "maxValue": "100000",
              "code": "#FFFF00"
          },
          {
              "minValue": "100000",
              "maxValue": "120000",
              "code": "#FF0000"
          }
      ]
  },
  "dials": {
      "dial": [
          {
              "value": "43033"
          }
      ]
  }
  }

  data_gauge4 = {
    "chart": {
      "numberSuffix" : "%",
      "lowerLimit": "0",
      "upperLimit": "200000",
      "theme": "zune",
      "exportenabled": "1",
  },
  "colorRange": {
      "color": [
          {
              "minValue": "0",
              "maxValue": "50000",
              "code": "#00FF00"
          },
          {
              "minValue": "50000",
              "maxValue": "100000",
              "code": "#FFFF00"
          },
          {
              "minValue": "100000",
              "maxValue": "120000",
              "code": "#FF0000"
          }
      ]
  },
  "dials": {
      "dial": [
          {
              "value": "117659"
          }
      ]
  }
  }

  data_gauge5 = {
    "chart": {
      "numberSuffix" : "%",
      "lowerLimit": "0",
      "showValue": "1",
      "upperLimit": "200000",
      "theme": "zune",
      "exportenabled": "1",
  },
  "colorRange": {
      "color": [
          {
              "minValue": "0",
              "maxValue": "50000",
              "code": "#FF0000"
          },
          {
              "minValue": "50000",
              "maxValue": "100000",
              "code": "#FFFF00"
          },
          {
              "minValue": "100000",
              "maxValue": "120000",
              "code": "#00FF00"
          }
      ]
  },
  "dials": {
      "dial": [
          {
              "value": "14851"
          }
      ]
  }
  }

  width_gauce3 = 0.13 * screen.width
  height_gauce2 =  0.18 * screen.height
  width_gauce2 =  0.16 * screen.width

  width = 0.41 * screen.width;
  full_widt = 0.88 * screen.width;
  height = 0.5 * screen.height;
  type = 'mscombidy2d';
  dataFormat = 'json';
  dataSource = this.data;

  type_bar = 'scrollcolumn2d';
  dataSourceBar = this.data_bar;
  dataSource2 = this.data_2;
  dataSource3 = this.data_3;

  type_gauce1 = 'AngularGauge'
  dataSourceGauge = this.data_gauge1
  dataSourceGauge1 = this.data_gauge2
  dataSourceGauge2 = this.data_gauge3
  dataSourceGauge3 = this.data_gauge4
  dataSourceGauge4 = this.data_gauge5

  type_bar2 = 'mscolumn2d'
  dataSourceBar2 = this.data_stock;

  type_line = 'msline';
  dataSourceLine = this.data_line;

  type_line2 = 'msline'
  dataSourceLine2 = this.data_line2

  type_stack_col = 'stackedcolumn2d';
  dataSourceStackCol = this.data_stack_coloumn;
  dataSourceStackCol2 = this.data_stack_coloumn2;
  dataSourceStackCol3 = this.data_stack_coloumn3;
  dataSourceStackCol4 = this.data_stack_coloumn4;
  dataSourceStackCol5 = this.data_stack_coloumn5;
  dataSourceStackCol6 = this.data_stack_coloumn6;
  dataSourceStackCol7 = this.data_stack_coloumn7;
  dataSourceStackCol8 = this.data_stack_coloumn8;
  


  collapsed: boolean = true;

  // options gauge
  animations = true;
  showLegend = false;
  view_gauge = [0.27 * screen.width, 0.5 * screen.height];
  view_gauge2 = [0.42 * screen.width, 0.5 * screen.height];
  view_card = [0.43 * screen.width];

  colorScheme = 'cool';


  constructor(private services: ServicesService) {
  }

  ngOnInit() {
    console.log(this.dataCache);
  }
}
