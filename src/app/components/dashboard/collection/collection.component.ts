import { Component,Input, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { element } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  
  

  
  branchList
  portfolioList
  

  

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
      "theme": "fint"
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
      // "valueBelowPivot":"1",
      // "showValue":"1",
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
      "valueBelowPivot":"1",
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
  

  type_bar = 'scrollcolumn2d';
  dataSourceBar =null;
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

  getCu = localStorage.getItem("currentUser");
  currentUser=JSON.parse(this.getCu);

  list_area = {
    "app": "mdm",
    "method": "getBranchArea",
    "data": null
  }

  branch_params_code = {
    "data": "WHERE BRANCH_TYPE = 'BR' ORDER BY BRANCH_NAME ASC"
  }

  branch_params_area = {
    "data": "WHERE BRANCH_PARENT = '" + this.currentUser["data"].resultUserProfileLocation[0].branch_code + "' AND BRANCH_TYPE = 'BR' AND BRANCH_NAME NOT LIKE '%AREA' ORDER BY BRANCH_NAME ASC"
  }

  branch_params_code_ho = {
    "data": "WHERE BRANCH_TYPE = 'BR' AND BRANCH_TYPE NOT IN ('AR','HO') ORDER BY BRANCH_NAME ASC"
  }

  ho_branch_params_ho = {
    "data": "WHERE BRANCH_TYPE = 'AR' ORDER BY BRANCH_NAME ASC"
  }


  constructor(private service: ServicesService) {

  }

  begin_delq_list=['0.Current',
    '1.1-30',
    '3.61-90',
    '2.31-60',
    '4.91-120',
    '5.121-150',
    '6.151-180',
    '7.180UP'
    ]
    portofolio_list;
  portofolio_list1=[
    'CCAR',
    'NCAR',
    'UCAR',
    'MCAR'
  ]

  portofolio_list2=[
    'CMCY',
    'NMCY',
    'UMCY',
    'MMCY'
  ]

  penggolongan_product_list=[
    'CAPTIVE',
    'NON CAPTIVE',
    'MULTIGUNA CAPTIVE',
    'MULTIGUNA NON CAPTIVE'
  ]

  object_list=['MOBIL',
    'MOTOR'
    ]

    // bulan0=(new Date().getMonth() + ).toString();
    // bulan1
    // bulan2
    // bulan3
    // bulan4
    // bulan5
    // bulan6
    // bulan7
    // bulan8
    // bulan9
    // bulan10
    // bulan11
    // bulan12
    areaDisable;
    area;
    areaList;
  begin_delq;
  portofolio;
  p_product;
  object;
  mufnet;
  mufnet_list;
  ngOnInit() {
    //console.log(this.currentUser);
    // this.getAllBranchList();
    this.getFilter(); 

  }

  filterObject(val:any){
    // if(val=="MOBIL" && this.p_product == "CAPTIVE"){
    //   this.portofolio_list=['CCAR'];
    //   this.portofolio="CCAR"
    // }
    // else if(val=="MOTOR" && this.p_product == "CAPTIVE"){
    //   this.portofolio_list=["CMCY"]
    //   this.portofolio="CMCY"
    // } 
    if (val=="MOTOR") {
      this.portofolio_list=this.portofolio_list2;
      this.portofolio="CMCY"
    }
    else if (val=="MOBIL") {
      this.portofolio_list=this.portofolio_list1;
      this.portofolio="CCAR";
    }
  }

  // filterGolProduct(val:any){
  //   if(val=="CAPTIVE" && this.object == "MOBIL"){
  //     this.portofolio_list=['CCAR'];
  //     this.portofolio="CCAR"
  //   }
  //   else if(val=="NON CAPTIVE" && this.object == "MOBIL"){
  //     this.portofolio_list=this.portofolio_list1;
  //     this.portofolio="NCAR";
  //   }

  //   if(val=="CAPTIVE" && this.object == "MOTOR"){
  //     this.portofolio_list=["CMCY"]
  //     this.portofolio="CMCY"
  //   }
  //   else if(val=="NON CAPTIVE" && this.object == "MOTOR"){
  //     this.portofolio_list=this.portofolio_list2;
  //     this.portofolio="NMCY"
  //   }
  // }

  filterBDelq(val:any){
    this.begin_delq=val;
    this.ngOnInit();
    
  }

  filterArea(val:any){
    this.getAllBranchList(val);
  }

  filterBranch(val:any){
    this.getMufnetByBranch(val);
  }


  datas=[];
  list_branch=[];
  cabang;
  setSatus;

  disable2=false;
  getFilter(){
    var AreaFilter=[];
    var AreaFilter2=[];
    var bran:string;
    this.getStatusLogin();
   if(this.setSatus=="ho"){
     this.list_area.data=this.ho_branch_params_ho 
        this.service.postData('post',this.list_area).subscribe(res=>{
          this.areaList=res;
              if(this.area==undefined){
                this.area=this.areaList[0].branch_code
                console.log(this.areaList);
                
              } 
              this.getAllBranchList(this.area);            
        });
         
   }
   else if(this.setSatus=="area"){
    this.areaList=this.currentUser['data'].resultUserProfileLocation;
    this.area=this.currentUser['data'].resultUserProfileLocation[0].branch_code;
    this.areaDisable=true;
    this.getAllBranchList(this.area);
   }
   else{
    this.list_branch=this.currentUser['data'].resultUserProfileLocation;
    this.cabang=this.currentUser['data'].resultUserProfileLocation[0].branch_code;
    this.list_area.data=this.ho_branch_params_ho 
    this.service.postData('post',this.list_area).subscribe(res=>{
      AreaFilter=res;
      AreaFilter2[0]=AreaFilter.find(f=>(f.branch_code+"").substring(3,4)==this.cabang.substring(1,2));
          this.areaList=AreaFilter2
          this.area=this.areaList[0].branch_code;
          this.getMufnetByBranch(this.cabang);    
          // this.fullMethodDeploy();            
    });
    
   }
  }

  // COLLECTION EFFECTIVENESS PERFORMANCE
  dataEpt;

  getStatusLogin(){
    var cu=this.currentUser;
    for (var index = 0; index < cu.data.resultProfileUserRole.length; index++) {
      if(cu.data.resultProfileUserRole[index].role_code == 'DSB_MKT_BR') {
        // this.cabang=cu['data'].resultUserProfileLocation[0].branch_code;
        // this.list_area.data = this.branch_params_code;
         this.setSatus="branch"
         this.branchList=
         this.areaDisable=true;
         this.disable2=true;
        break;
      } 
      else if(cu.data.resultProfileUserRole[index].role_code == 'DSB_MKT_AR') {
         this.setSatus="area"
         this.areaDisable=true;
         this.disable2=false;
        break;
      }
      else {
         this.setSatus="ho"
         this.areaDisable=false;
         this.disable2=false;
      }
    }
  }

  getAllBranchList(area:string){
    console.log(area)
    if(this.setSatus=="ho"){
      this.branch_params_area = {
        "data": "WHERE BRANCH_PARENT = '" + area + "' AND BRANCH_TYPE = 'BR' AND BRANCH_NAME NOT LIKE '%AREA' ORDER BY BRANCH_NAME ASC"
      }
      this.list_area.data=this.branch_params_area
      this.service.postData('post',this.list_area).subscribe(res=>{
        this.list_branch=res;
        if(this.cabang== undefined){
          this.cabang=this.list_branch[0].branch_code
        }
          this.getMufnetByBranch(this.cabang);
          // this.fullMethodDeploy();
      });
    }

    else if(this.setSatus=="area"){
      this.branch_params_area = {
        "data": "WHERE BRANCH_PARENT = '" + area + "' AND BRANCH_TYPE = 'BR' AND BRANCH_NAME NOT LIKE '%AREA' ORDER BY BRANCH_NAME ASC"
      }
      this.list_area.data=this.branch_params_area
      this.service.postData('post',this.list_area).subscribe(res=>{
        if(res){
          this.list_branch=res;
          if(this.cabang== undefined){
            this.cabang=this.list_branch[0].branch_code
          }
          this.getMufnetByBranch(this.cabang);
          // this.fullMethodDeploy();
        }
      });
    }
  }

  
  getMufnetByBranch(branch){
    var getDataMufNet={
      "app": "muf-dashboard",
      "method": "getMufnetByBranch",
      "data": {
          "branch_parent":branch
      }
  }
    this.service.postData('post',getDataMufNet).subscribe(muf=>{
      // console.log(muf);
      if(muf['status']==true){
        this.mufnet_list=muf['data'];
           this.mufnet=this.mufnet_list[0].branch_code;
        // console.log(muf['data'])
      }
      else{
        this.mufnet_list=[];
        this.mufnet="";
      }
      this.fullMethodDeploy();
    })
  }

  fullMethodDeploy(){
    if(this.begin_delq== undefined){
      this.begin_delq=this.begin_delq_list[0];
    }
    if(this.portofolio==undefined){
      this.portofolio_list=this.portofolio_list1
      this.portofolio="CCAR";
    }
    if(this.object==undefined){
      this.object="MOBIL";
    }
    if(this.p_product==undefined){
      this.p_product="CAPTIVE";
    }
        console.log(this.cabang);
        console.log(this.begin_delq);
        console.log(this.p_product);
        console.log(this.object);
        console.log(this.portofolio);
        console.log(this.mufnet);
        // this.getMufnetByBranch(this.cabang);

        this.getEfektifPerformTable(this.area,this.cabang,this.mufnet,this.begin_delq,this.p_product,this.object,this.portofolio);
        this.getEfektifPerformChart(this.area,this.cabang,this.mufnet,this.begin_delq,this.p_product,this.object,this.portofolio);
        this.collectionEffectivenessPerformanceLT(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.collectionEffectivenessPerformanceLC(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataTabelCollectionBucketByUnit(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataChartCollectionBucketByUnit(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataChartCollectionBucketByAmount(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDatacollectionBucketByAmountTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDatacollectionRepoByPortoTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getCollectionRepoByPortoChart(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.dataGetCollectionUnitSoldObjYearChart(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.dataGetCollectionUnitSoldObjYearTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataCollectionLossesPerformNetTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataCollectionLossesPerformNetChart(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataCollectionLossesPerformGrossTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.getDataCollectionLossesPerformGrossChart(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.dataGetCollectionPerformRssByAmtTable(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);
        this.dataGetCollectionPerformRssByAmtChart(this.area,this.cabang,this.mufnet,"0.Current",this.p_product,this.object,this.portofolio);

        this.getDataCollectionGcl106YtdChart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDataCollectionLorGross106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDataCollectionWOAll106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDataCollectionGci106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDataCollectionPersenGCL(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDatacollectionPersenNCL(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDatacollectionNCL106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDatacollectionLorNET106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDatacollectionWONormal106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        this.getDatacollectionNCI106Chart(this.area,this.cabang,this.mufnet,this.p_product,this.object,this.portofolio);
        
      }

  // GAUGE 1 
  data_gauge_persenGCL = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceGaugePersenGCL=this.data_gauge_persenGCL
  getDataCollectionPersenGCL(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionPersenGCL",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      if(res.status==true){
        this.data_gauge_persenGCL.dials.dial[0].value=res['data_collection_%_gcl_chart'].value_gcl[0].value;
      }
      else{
        console.log("PersenGCL",false)
      }
    //  console.log(res)
     
    })

  }

  // GAUGE 2
  data_gauge_gcl106 = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceGaugeGcl106 = this.data_gauge_gcl106

  getDataCollectionGcl106YtdChart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionGcl106YtdChart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }

    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      if(res){
      this.data_gauge_gcl106.dials.dial[0].value=res['data_collection_gcl_106_ytd_chart'].value_gcl[0].value;
      // console.log(res['data_collection_gcl_106_ytd_chart'].value_gcl[0].value)
      }
    })

  }

  // GAUGE 3
  data_gauge_LorGross106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceLorGross106=this.data_gauge_LorGross106Chart;

  getDataCollectionLorGross106Chart (area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionLorGross106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }

    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      if(res.status==true){
        this.dataSourceLorGross106.dials.dial[0].value=res['data_collection_lor_gros_106_chart'].value_gcl[0].value;
      }
      else{
       
      }
      
      // this.data_gauge_gcl106.dials.dial[0].value=res['data_collection_gcl_106_ytd_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })
  }

// GAUGE 4
  data_gauge_WOAll106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }

  dataSourceWOAll106Chart=this.data_gauge_WOAll106Chart

  getDataCollectionWOAll106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionWOAll106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      // console.log("woa",res)
      this.data_gauge_WOAll106Chart.dials.dial[0].value=res['data_collection_wo_all_106_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }

  // GAUGE 5
  data_gauge_Gci106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }

  dataSourceGci106Chart=this.data_gauge_Gci106Chart
  getDataCollectionGci106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionGci106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      // console.log("gci",res)
      this.data_gauge_Gci106Chart.dials.dial[0].value=res['data_collection_gci_106_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }

  // GAUGE 6
  data_gauge_PersenNCL = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourcePersenNCL=this.data_gauge_PersenNCL
  getDatacollectionPersenNCL(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionGci106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postData('post',dataChartGauge).subscribe(res=>{
      // console.log("PersenNCL",res)
      if(res.status==true){
        this.data_gauge_PersenNCL.dials.dial[0].value=res['data_collection_gci_106_chart'].value_gcl[0].value;
      }
      else{
        console.log("getDatacollectionPersenNCL", false+" : Data Error")
      }
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }

  // GAUGE 7
  data_gauge_NCL106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceNCL106Chart=this.data_gauge_NCL106Chart
  getDatacollectionNCL106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionNCL106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      // console.log("NCL106Chart",res)
      this.data_gauge_NCL106Chart.dials.dial[0].value=res['data_collection_ncl_106_ytd_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }

  // GAUGE 8 ****
  data_gauge_LorNET106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceLorNET106Chart=this.data_gauge_LorNET106Chart
  getDatacollectionLorNET106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionLorNET106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      // console.log("LorNET106Chart",res)
      // this.data_gauge_LorNET106Chart.dials.dial[0].value=res['data_collection_lor_net_106_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }


   // GAUGE 9
   data_gauge_WONormal106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceWONormal106Chart=this.data_gauge_WONormal106Chart
  getDatacollectionWONormal106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionWONormal106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      // console.log("WONormal106Chart",res)
      this.data_gauge_WONormal106Chart.dials.dial[0].value=res['data_collection_wo_all_106_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }

  // GAUGE 10
  data_gauge_NCI106Chart = {
    "chart": {
      // "numberSuffix" : "%",
      "lowerLimit": "0",
      "valueBelowPivot":"1",
      "upperLimit": "10",
      "showValues": "1",
      "theme": "zune",
      "exportenabled": "1",
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "3",
                "code": "#00FF00"
            },
            {
                "minValue": "3",
                "maxValue": "7",
                "code": "#FFFF00"
            },
            {
                "minValue": "7",
                "maxValue": "10",
                "code": "#FF0000"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": null
            }
        ]
    }
  }
  dataSourceNCI106Chart=this.data_gauge_NCI106Chart
  getDatacollectionNCI106Chart(area,cab,mufnet,pp,obj,porto){
    var dataChartGauge={
      "app": "muf-dashboard",
      "method": "collectionNCI106Chart",
      "data": {
      	"area_code": area,
          "branch_code": cab,
          "mufnet_code": mufnet,
          "portofolio":porto,
          "penggolongan_product": pp,
          "object": obj
      }
    }
    this.service.postLocal('post',dataChartGauge).subscribe(res=>{
      console.log("NCI106Chart",res)
      this.data_gauge_NCI106Chart.dials.dial[0].value=res['data_collection_nci_106_chart'].value_gcl[0].value;
      // console.log(res['data_collection_lor_gros_106_chart'])
    })

  }
 



  getEfektifPerformTable(area,cab,mufnet,bDelq,pp,obj,porto){
    // console.log(mufnet)
    var ept={
      "app": "muf-dashboard",
      "method": "collectionEffectivenessPerformanceRT",
      "data": {
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  }

  this.service.postData('post',ept).subscribe(result=>{
    if(result.status==true){
      this.dataEpt=result['data_effectiveness_collection_performance_rt'];
    }
    else{
      this.dataEpt=[];
    }
   
    // //console.log(this.dataEpt)
  });

  }

  data_bar = {
    "chart": {
      "caption": "Collection Effectiveness Performance",
      "subcaption": "Mandiri Utama Finance",
      "xAxisname": "Month",
      // "pYAxisName": "Amount (In USD)",
      // "sYAxisName": "Profit %",
      // "numberSuffix": "",
      // "sNumberSuffix": "",
      // "sYAxisMaxValue": "85",
      // "drawcrossline": "0",
      "showValues": "0",
      "theme": "fusion",
      // "labeldisplay": "auto",
      "labelFontSize": "10",
      "exportenabled": "1"
      
    },
    "categories":
    [
      {
        "category": null
      }
    ],
    "dataset": 
    [
      {
        "seriesname": "Back To Current",

        "data": null
      },
      {
        "seriesname": "Delq Awal",

        
        "data": null
      },
      // {
      //   "seriesname": "Delq Akhir",
      //   "data": null
      // },
      {
        "seriesname": "Lunas",

        "data": null
      },
      {
        "seriesname": "Repo",

        "data": null
      },
      {
        "seriesname": "Roll Down",

        "data": null
      },
      {
        "seriesname": "Roll Up",

        "data": null
      },
      {
        "seriesname": "Stay",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": null
      },
      {
        "seriesname": "WO",

        "data": null
      }
    ]
  };

  dataEptChart; 
  getEfektifPerformChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var eptChart={
      "app": "muf-dashboard",
      "method": "collectionEffectivenessPerformanceRC",
      "data": {
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }



    this.service.postData('post',eptChart).subscribe(resChart=>{
      if(resChart.status==true){

      
      this.dataEptChart=resChart
      // console.log(resChart);
      // this.dataEptChart['data_effectiveness_collection_performance_rc']['category'].forEach(function(value){
        
      
      // });
      // console.log(tempCat)
      this.data_bar.categories[0].category= this.dataEptChart['data_effectiveness_collection_performance_rc']['category']
      this.data_bar.dataset[0].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['data_back_to_current']
      this.data_bar.dataset[1].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['delq_awal']
      this.data_bar.dataset[2].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['lunas']
      this.data_bar.dataset[3].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['repo']
      this.data_bar.dataset[4].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['roll_down']
      this.data_bar.dataset[5].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['roll_up']
      this.data_bar.dataset[6].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['stay']
      this.data_bar.dataset[7].data=this.dataEptChart['data_effectiveness_collection_performance_rc']['wo']
      
      // console.log(this.data_bar.dataset[6].data);

      this.dataSourceBar=this.data_bar
    }
    else{
      this.dataEptChart=[];
    }
      // console.log(this.dataSourceBar)
    })

  }

  eplt=[];
  collectionEffectivenessPerformanceLT(area,cab,mufnet,bDelq,pp,obj,porto){
    var dataEplt={
      "app": "muf-dashboard",
      "method": "collectionEffectivenessPerformanceLT",
      "data": {
        "begin_delq": "0.Current",
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }

    this.service.postData('post',dataEplt).subscribe(result=>{
      // console.log(result)
      if(result.status==true){
        this.eplt=result['data_effectiveness_collection_performance_lt'];
      }
      else{
        this.eplt=[];
      }      
      // console.log(this.eplt);
    });
  }

  dataSource;
  data = {
    "chart": {
      "caption": "Collection Effectiveness Performance",
      "subcaption": "Mandiri Utama Finance",
      "xAxisname": "Month",
      // "pYAxisName": "Amount (In USD)",
      // "sYAxisName": "Profit %",
      // "numberSuffix": "%",
      // "sNumberSuffix": "%",
      // "sYAxisMaxValue": "85",
      // "labelDisplay": "Auto",
      "showValues": "0",
      "showLabels": "0",
      "theme": "fusion",
      "exportenabled": "1"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "% Stay",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": null
      },
      {
        "seriesname": "% Back TO Current",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "% Lunas",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "% Repo",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "% Roll Down",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "% Roll Up",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "% WO",
        "renderas": "line",
        "data": null
      }
    ]
  }
  collectionEffectivenessPerformanceLC(area,cab,mufnet,bDelq,pp,obj,porto){
    var temp=this.data;
    var epltChart={
      "app": "muf-dashboard",
      "method": "collectionEffectivenessPerformanceLC",
      "data": {
        "begin_delq": "0.Current",
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }

    // console.log(epltChart);
    var tempValue;
    this.service.postData('post',epltChart).subscribe(resChart=>{
      // console.log(resChart)
      if(resChart.status==true){
        tempValue=resChart['data_effectiveness_collection_performance_lc'];
      // console.log(resChart['data_effectiveness_collection_performance_lc'])
      temp.categories[0].category=tempValue['category'];
      temp.dataset[0].data=tempValue['stay'];
      temp.dataset[1].data=tempValue['data_back_to_current']
      temp.dataset[2].data=tempValue['lunas']
      temp.dataset[3].data=tempValue['repo']
      temp.dataset[4].data=tempValue['roll_down']
      temp.dataset[5].data=tempValue['roll_up']
      temp.dataset[6].data=tempValue['wo']
      this.dataSource=temp;
      }
      else{
        tempValue=[];
      }
      
      //console.log(this.dataSource);
    })

  }


  bucketUnit=[];
  getDataTabelCollectionBucketByUnit(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempBucket={
      "app": "muf-dashboard",
      "method": "collectionBucketByUnitTable",
      "data": {
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
    this.service.postData('post',tempBucket).subscribe(result=>{
      this.bucketUnit=result['data_collection_bucket_by_unit_table'];

      // console.log(this.bucketUnit);
    })
  }

  dataSourceBucketByUnit = {
    "chart": {
      "caption": "Bucket by Unit",
      "subcaption": "Mandiri Utama Finance",
      "xAxisname": "Month",
      // "pYAxisName": "Amount (In USD)",
      // "sYAxisName": "Profit %",
      // "numberSuffix": "",
      // "sNumberSuffix": "",
      // "sYAxisMaxValue": "85",
      "showValues": "0",
      "labelDisplay": "Auto",
      "useEllipsesWhenOverflow":"0",
      "theme": "fusion",
      "exportenabled": "1"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "AR/10^6",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": null
      },
      {
        "seriesname": "01.Current",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "02. 1-30",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "03. 31-60",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "04. 61-90",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "05. 91-120",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "06. 121-150",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "07. >150",
        "renderas": "line",
        "data": null
      }
    ]
  }

  getDataChartCollectionBucketByUnit(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempchart;
    var bucketChart={
      "app": "muf-dashboard",
      "method": "collectionBucketByUnitChart",
      "data": {
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
  this.service.postData('post',bucketChart).subscribe(result=>{
    if(result.status==true){
      tempchart=result['data_collection_bucket_by_unit_chart'];
      this.dataSourceBucketByUnit.categories[0].category=tempchart['category'];
      this.dataSourceBucketByUnit.dataset[0].data=tempchart['unit_ar_106'];
      this.dataSourceBucketByUnit.dataset[1].data=tempchart['unit_1_30'];
      this.dataSourceBucketByUnit.dataset[2].data=tempchart['unit_31_60'];
      this.dataSourceBucketByUnit.dataset[3].data=tempchart['unit_61_90'];
      this.dataSourceBucketByUnit.dataset[4].data=tempchart['unit_91_120'];
      this.dataSourceBucketByUnit.dataset[5].data=tempchart['unit_121_150'];
      this.dataSourceBucketByUnit.dataset[6].data=tempchart['unit_lebih_dari_150'];
    }
    else{
      tempchart=[];
    }
    // console.log(tempchart);
  })
  
  }



  dataSourceBucketByAmount={
    "chart": {
      "caption": "Bucket by Amount",
      "subcaption": "Mandiri Utama Finance",
      "xAxisname": "Month",
      // "pYAxisName": "Amount (In USD)",
      // "sYAxisName": "Profit %",
      // "numberSuffix": "%",
      // "sNumberSuffix": "%",
      // "sYAxisMaxValue": "85",
      "showValues": "0",
      "labelDisplay": "Auto",
      "useEllipsesWhenOverflow":"0",
      "theme": "fusion",
      "exportenabled": "1"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "AR/10^6",
        "parentYAxis": "S",
        "renderAs" : "Bar",
        "data": null
      },
      {
        "seriesname": "01.Current",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "02. 1-30",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "03. 31-60",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "04. 61-90",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "05. 91-120",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "06. 121-150",
        "renderas": "line",
        "data": null
      },
      {
        "seriesname": "07. >150",
        "renderas": "line",
        "data": null
      }
    ]
  }

  getDataChartCollectionBucketByAmount(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempchart;
    var bucketChart={
      "app": "muf-dashboard",
      "method": "collectionBucketByAmountChart",
      "data": {
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }

    this.service.postData('post',bucketChart).subscribe(res=>{
      
      if(res.status==true){
        tempchart=res['data_collection_bucket_by_amount_chart'];

      this.dataSourceBucketByAmount.categories[0].category=tempchart['category'];
      this.dataSourceBucketByAmount.dataset[0].data=tempchart['unit_ar_106'];
      this.dataSourceBucketByAmount.dataset[1].data=tempchart['unit_1_30'];
      this.dataSourceBucketByAmount.dataset[2].data=tempchart['unit_31_60'];
      this.dataSourceBucketByAmount.dataset[3].data=tempchart['unit_61_90'];
      this.dataSourceBucketByAmount.dataset[4].data=tempchart['unit_91_120'];
      this.dataSourceBucketByAmount.dataset[5].data=tempchart['unit_121_150'];
      this.dataSourceBucketByAmount.dataset[6].data=tempchart['unit_lebih_dari_150'];
      }
      else{
        tempchart=[];
      }
     
      // console.log(tempchart['data_collection_bucket_by_amount_chart']['category'])
    })
  }

  dataTableAmount=[];
  getDatacollectionBucketByAmountTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempchart;
    var bucketAmount={
      "app": "muf-dashboard",
      "method": "collectionBucketByAmountTable",
      "data": {
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }

  this.service.postData('post',bucketAmount).subscribe(response=>{
    this.dataTableAmount=response['data_collection_bucket_by_amount_table'];
    // console.log(this.dataTableAmount);
  })
  }

  //LOSSES PERFORMANCE GROSS -------------------------------------------------------------
  dataTableLossesPerformNet=[]
  getDataCollectionLossesPerformNetTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var LossesPerformNet={
      "app": "muf-dashboard",
      "method": "collectionLossesPerformNetTable",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }
  this.service.postLocal('post',LossesPerformNet).subscribe(result=>{
    console.log(result)
    this.dataTableLossesPerformNet=result['data_collection_losses_perform_net_table']
    // console.log(this.dataTableLossesPerformNet)
  })
  }

  dataChartLossesPerformNetChart={
    "chart": {
      "caption": "Losses Performance",
      "subcaption": "Mandiri Utama Finance",
      "xaxisname": "Month",
      "yaxisname": "Value",
      "showLabels": "0",
      "sNumberSuffix":"%",
      "sYAxisMaxValue":"4.50",
      "numberprefix": "",
      "exportenabled": "1",
      "theme": "fint"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "lor_net_amount",
        "data": null
      },
      {
        "seriesname": "nci_amount",
        "data": null
      },
      {
        "seriesname": "ncl_amount",
        "data": null
      },
      {
        "seriesname": "ncl_persen",
        "data": null
      },
      {
        "seriesname": "wo_normal",
        // "parentYAxis": "S",
        // "renderAs" : "Line",
        "data": null
      }
    ]
  }
  getDataCollectionLossesPerformNetChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var LossesPerformNetChart={
      "app": "muf-dashboard",
      "method": "collectionLossesPerformNetChart",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
    this.service.postLocal('post',LossesPerformNetChart).subscribe(result=>{
      var tempResult=result['data_collection_losses_perform_net_chart'];
      console.log(tempResult)
      this.dataChartLossesPerformNetChart.categories[0].category=tempResult['category'];
      this.dataChartLossesPerformNetChart.dataset[0].data=tempResult['lor_net_amount'];
      this.dataChartLossesPerformNetChart.dataset[1].data=tempResult['nci_amount'];
      this.dataChartLossesPerformNetChart.dataset[2].data=tempResult['ncl_amount'];
      this.dataChartLossesPerformNetChart.dataset[3].data=tempResult['ncl_persen'];
      this.dataChartLossesPerformNetChart.dataset[4].data=tempResult['wo_normal'];

      
    })

    
  }

  //LOSSES PERFORMANCE GROSS -------------------------------------------------------------
  dataTableLossesPerformGross=[]
  getDataCollectionLossesPerformGrossTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var LossesPerformGross={
      "app": "muf-dashboard",
      "method": "collectionLossesPerformGrossTable",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }
  this.service.postLocal('post',LossesPerformGross).subscribe(result=>{
    console.log(result)
    this.dataTableLossesPerformGross=result['data_collection_losses_perform_gross_table']
    // console.log(this.dataTableLossesPerformNet)
  })
  }

  dataChartLossesPerformGrossChart={
    "chart": {
      "caption": "Losses Performance",
      "subcaption": "Mandiri Utama Finance",
      "xaxisname": "Month",
      "yaxisname": "Value",
      "showLabels": "0",
      "sNumberSuffix":"%",
      "sYAxisMaxValue":"4.50",
      "numberprefix": "",
      "exportenabled": "1",
      "theme": "fint"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "lor_net_amount",
        "data": null
      },
      {
        "seriesname": "nci_amount",
        "data": null
      },
      {
        "seriesname": "ncl_amount",
        "data": null
      },
      {
        "seriesname": "ncl_persen",
        "data": null
      },
      {
        "seriesname": "wo_normal",
        // "parentYAxis": "S",
        // "renderAs" : "Line",
        "data": null
      }
    ]
  }
  getDataCollectionLossesPerformGrossChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var LossesPerformGrossChart={
      "app": "muf-dashboard",
      "method": "collectionLossesPerformGrossChart",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
    this.service.postLocal('post',LossesPerformGrossChart).subscribe(result=>{
      var tempResult=result['data_collection_losses_perform_gross_chart'];
      // console.log(result)
      if(result.status==true){
        this.dataChartLossesPerformGrossChart.categories[0].category=tempResult['category'];
        this.dataChartLossesPerformGrossChart.dataset[0].data=tempResult['lor_net_amount'];
        this.dataChartLossesPerformGrossChart.dataset[1].data=tempResult['nci_amount'];
        this.dataChartLossesPerformGrossChart.dataset[2].data=tempResult['ncl_amount'];
        this.dataChartLossesPerformGrossChart.dataset[3].data=tempResult['ncl_persen'];
        this.dataChartLossesPerformGrossChart.dataset[4].data=tempResult['wo_normal'];
      }
      else{
        console.log("LossesPerformGrossChart",false)
      }
      
      

      
    })

    
  }

  dataTableRepoPorto=[];
  getDatacollectionRepoByPortoTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempTable;
    var repoByPorto={
      "app": "muf-dashboard",
      "method": "collectionRepoByPortoTable",
      "data": {
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }

  this.service.postData('post',repoByPorto).subscribe(result=>{
    if(result){
      this.dataTableRepoPorto=result['data_collection_repo_by_porto_table'];
    }
    else{
      this.dataTableRepoPorto=[];
    }
    
    // console.log(this.dataTableRepoPorto)
  })
  }
  


  dataChartRepoByPorto= {
    "chart": {
      "caption": "REPO By PORTFOLIO",
      // "subcaption": " Top 5 Developed Countries",
      "numbersuffix": " %",
      // "showsum": "1",
      "showValues": "0",
      "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
      "theme": "fusion",
      "exportenabled": "1",
      "drawcrossline": "1"
    },
    "categories": [
      {
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "NMCY",
        "data": null
      },
      {
        "seriesname": "UMCY",
        "data": null
      },
      {
        "seriesname": "NCAR",
        "data": null
      },
      {
        "seriesname": "UCAR",
        "data": null
      },
      {
        "seriesname": "MMCY",
        "data": null
      },
      {
        "seriesname": "MCAR",
        "data": null
      },
      {
        "seriesname": "CMCY",
        "data": null
      },
      {
        "seriesname": "CCAR",
        "data": null
      }
    ]
  };
  getCollectionRepoByPortoChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var tempChart;
    var ChartRepoByPorto={
      "app": "muf-dashboard",
      "method": "collectionRepoByPortoChart",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }

  this.service.postData('post',ChartRepoByPorto).subscribe(res=>{
    tempChart=res['data_collection_repo_by_porto_chart'];
    this.dataChartRepoByPorto.categories[0].category=tempChart['category'];

    this.dataChartRepoByPorto.dataset[0].data=tempChart['ccar'];
    this.dataChartRepoByPorto.dataset[1].data=tempChart['cmcy'];
    this.dataChartRepoByPorto.dataset[2].data=tempChart['mcar'];
    this.dataChartRepoByPorto.dataset[3].data=tempChart['mmcy'];
    this.dataChartRepoByPorto.dataset[4].data=tempChart['ncar'];
    this.dataChartRepoByPorto.dataset[5].data=tempChart['nmcy'];
    this.dataChartRepoByPorto.dataset[6].data=tempChart['ucar'];
    this.dataChartRepoByPorto.dataset[7].data=tempChart['umcy'];
    // console.log(tempChart);

    // console.log(this.dataChartRepoByPorto)
  });

  }


  //collection Perform Repo, Sold, Stock By Amt
  dataTablePerformRssByAmt=[]
  dataGetCollectionPerformRssByAmtTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var PerformRssByAmtTable={
      "app": "muf-dashboard",
      "method": "collectionPerformRssByAmtTable",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }

    this.service.postLocal('post',PerformRssByAmtTable).subscribe(res=>{
      if(res.status==true){
        this.dataTablePerformRssByAmt=res['data_collection_perform_rss_by_amt_table'];
      }
      else{
        console.log("dataGetCollectionPerformRssByAmtTable", false+" : dataError")
      }
       console.log(res['data_collection_perform_rss_by_amt_table'])
    })

  }
  
  dataCharPerformRssByAmtChart={
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
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "REPO",
        "data": null
      },
      {
        "seriesname": "SOLD",
        "data": null
      },
      {
        "seriesname": "Stock",
        "data": null
      },
    ]
  }
  dataGetCollectionPerformRssByAmtChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var PerformRssByAmtChart={
      "app": "muf-dashboard",
      "method": "collectionPerformRssByAmtChart",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
    }
    var tempChart;
    this.service.postLocal('post',PerformRssByAmtChart).subscribe(result=>{
      tempChart=result['data_collection_perform_rss_by_amt_chart']
      if(result.status==true){
        this.dataCharPerformRssByAmtChart.categories[0].category=tempChart.category
        this.dataCharPerformRssByAmtChart.dataset[0].data=tempChart.repo
        this.dataCharPerformRssByAmtChart.dataset[1].data=tempChart.sold
        this.dataCharPerformRssByAmtChart.dataset[2].data=tempChart.stock
        // console.log(tempChart)
      }
      else{
        console.log("dataGetCollectionPerformRssByAmstChart",false+": Data Error")
      }
    })

  }


  // collection Unit Sold Object Year Table
  dataTableUnitSoldObjYear=[];
  dataGetCollectionUnitSoldObjYearTable(area,cab,mufnet,bDelq,pp,obj,porto){
    var UnitSoldObjYear={
      "app": "muf-dashboard",
      "method": "collectionUnitSoldObjYearTable",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
    this.service.postData('post',UnitSoldObjYear).subscribe(result=>{
      // console.log(result)
      if(result.status==true){
        this.dataTableUnitSoldObjYear=result['data_collection_sold_unit_obj_year_table']
      }
      // console.log(this.dataTableUnitSoldObjYear)
    })
  }


  
  dataUnitSoldObjYearChart={
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
        "category": null
      }
    ],
    "dataset": [
      {
        "seriesname": "2014",
        "data": null
      },
      {
        "seriesname": "2013",
        "data": null
      },
      {
        "seriesname": "2012",
        "data": null
      },
      {
        "seriesname": "2011",
        "data": null
      },
      {
        "seriesname": "2010",
        "data": null
      },
      {
        "seriesname": "2009",
        "data": null
      },
      {
        "seriesname": "2008",
        "data": null
      },
      {
        "seriesname": "2007",
        "data": null
      },
      {
        "seriesname": "2006",
        "data": null
      },
      {
        "seriesname": "2005",
        "data": null
      },
      {
        "seriesname": "2004",
        "data": null
      },
      {
        "seriesname": "2003",
        "data": null
      }
    ]
  };
  dataGetCollectionUnitSoldObjYearChart(area,cab,mufnet,bDelq,pp,obj,porto){
    var UnitSoldObjYearCharts={
      "app": "muf-dashboard",
      "method": "collectionUnitSoldObjYearChart",
      "data":{
        "begin_delq": bDelq,
        "area_code": area,
        "branch_code": cab,
        "mufnet_code": mufnet,
        "portofolio":porto,
        "penggolongan_product": pp,
        "object": obj
      }
  
  }
    this.service.postData('post',UnitSoldObjYearCharts).subscribe(res=>{
      // console.log(res)
      // if(result.status==true){
      //   this.dataTableUnitSoldObjYear=result['data_collection_sold_unit_obj_year_table']
      // }
      // console.log(this.dataTableUnitSoldObjYear)
    })
  }


  
  onClickSubmit(){
    this.ngOnInit();
  }
}
