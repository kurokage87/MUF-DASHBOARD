import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  mufnet: any
  listCabang
  listPortfolio



  line1 = {
    "chart": {
      "caption": "TREND WO JF NON JF BY UNIT",
      "pYAxisName": "",
      "sYAxisName": "",
      "sYaxisMaxValue": "900",
      "pYAxisMaxValue": "2500",
      // "useEllipsesWhenOverflow":"0",
      "numbersuffix": "",
      "exportenabled": "1",
      // "plottooltext": "<b>$dataValue</b> Proyeksi 0+ $seriesName",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "NON JF",
        "renderAs": "line",
        "data": [
          {
            "value": "354"
          },
          {
            "value": "742"
          },
          {
            "value": "638"
          },
          {
            "value": "940"
          },
          {
            "value": "274"
          },
          {
            "value": "848"
          },
          {
            "value": "872"
          },
          {
            "value": "903"
          },
          {
            "value": "919"
          },
          {
            "value": "831"
          },
          {
            "value": "1049"
          },
          {
            "value": "1173"
          },
          {
            "value": "961"
          }
        ]
      },
      {
        "seriesname": "Grand Total",
        "renderAs": "line",
        "data": [
          {
            "value": "409"
          },
          {
            "value": "742"
          },
          {
            "value": "789"
          },
          {
            "value": "1185"
          },
          {
            "value": "894"
          },
          {
            "value": "1289"
          },
          {
            "value": "1323"
          },
          {
            "value": "1464"
          },
          {
            "value": "1540"
          },
          {
            "value": "1463"
          },
          {
            "value": "1810"
          },
          {
            "value": "2026"
          },
          {
            "value": "1756"
          }
        ]
      },
      {
        "seriesname": "JF",
        "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "55"
          },
          {
            "value": "125"
          },
          {
            "value": "151"
          },
          {
            "value": "245"
          },
          {
            "value": "274"
          },
          {
            "value": "441"
          },
          {
            "value": "484"
          },
          {
            "value": "561"
          },
          {
            "value": "621"
          },
          {
            "value": "632"
          },
          {
            "value": "761"
          },
          {
            "value": "853"
          },
          {
            "value": "795"
          }
        ]
      }
    ]
  }

  line2 = {
    "chart": {
      "caption": "TREND WO JF NON JF BY AMT",
      "pYAxisName": "",
      "sYAxisName": "",
      "sYaxisMaxValue": "40000",
      "pYAxisMaxValue": "25000",
      // "useEllipsesWhenOverflow":"0",
      "numbersuffix": "",
      "exportenabled": "1",
      // "plottooltext": "<b>$dataValue</b> Proyeksi 0+ $seriesName",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "JF",
        "renderAs": "line",
        "data": [
          {
            "value": "1454"
          },
          {
            "value": "2528"
          },
          {
            "value": "2117"
          },
          {
            "value": "3487"
          },
          {
            "value": "4452"
          },
          {
            "value": "6650"
          },
          {
            "value": "7450"
          },
          {
            "value": "7980"
          },
          {
            "value": "8702"
          },
          {
            "value": "10321"
          },
          {
            "value": "11058"
          },
          {
            "value": "11987"
          },
          {
            "value": "12058"
          }
        ]
      },
      {
        "seriesname": "Grand Total",
        "renderAs": "line",
        "parentYAxis": "S",
        "data": [
          {
            "value": "7681"
          },
          {
            "value": "13278"
          },
          {
            "value": "12762"
          },
          {
            "value": "20074"
          },
          {
            "value": "15519"
          },
          {
            "value": "22159"
          },
          {
            "value": "24589"
          },
          {
            "value": "28628"
          },
          {
            "value": "28027"
          },
          {
            "value": "26135"
          },
          {
            "value": "28695"
          },
          {
            "value": "33933"
          },
          {
            "value": "31517"
          }
        ]
      },
      {
        "seriesname": "NON JF",
        "renderAs": "line",
        "data": [
          {
            "value": "6228"
          },
          {
            "value": "10750"
          },
          {
            "value": "16587"
          },
          {
            "value": "11068"
          },
          {
            "value": "15508"
          },
          {
            "value": "17452"
          },
          {
            "value": "17225"
          },
          {
            "value": "15790"
          },
          {
            "value": "18654"
          },
          {
            "value": "22256"
          },
          {
            "value": "18998"
          },
          {
            "value": "19558"
          },
          {
            "value": "20123"
          }
        ]
      }
    ]
  }

  line3 = {
    "chart": {
      "caption": "HANDLING TO WO_IN UNIT",
      "xAxisName": "",
      "pYAxisName": "",
      "sYAxisName": "",
      "numberPrefix": "",
      "numbersuffix": "",
      "exportenabled": "1",
      "sNumberSuffix": " ",
      "pYAxisMaxValue": "250",
      "sYAxisMaxValue": "9",
      "divlineAlpha": "100",
      "divlineColor": "#999999",
      "divlineThickness": "1",
      "divLineDashed": "1",
      "divLineDashLen": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "dataset": [
          {
            "seriesname": "Sold",
            "data": [
              {
                "value": "5"
              },
              {
                "value": "8"
              },
              {
                "value": "10"
              },
              {
                "value": "20"
              },
              {
                "value": "34"
              },
              {
                "value": "38"
              },
              {
                "value": "45"
              },
              {
                "value": "32"
              },
              {
                "value": "65"
              },
              {
                "value": "25"
              },
              {
                "value": "20"
              },
              {
                "value": "27"
              },
              {
                "value": "31"
              }
            ]
          },
          {
            "seriesname": "Repo",
            "data": [
              {
                "value": "15"
              },
              {
                "value": "19"
              },
              {
                "value": "29"
              },
              {
                "value": "25"
              },
              {
                "value": "39"
              },
              {
                "value": "47"
              },
              {
                "value": "65"
              },
              {
                "value": "87"
              },
              {
                "value": "77"
              },
              {
                "value": "90"
              },
              {
                "value": "24"
              },
              {
                "value": "10"
              },
              {
                "value": "5"
              }
            ]
          },
          {
            "seriesname": "Lunas",
            "data": [
              {
                "value": "8"
              },
              {
                "value": "10"
              },
              {
                "value": "12"
              },
              {
                "value": "14"
              },
              {
                "value": "7"
              },
              {
                "value": "20"
              },
              {
                "value": "12"
              },
              {
                "value": "16"
              },
              {
                "value": "24"
              },
              {
                "value": "11"
              },
              {
                "value": "5"
              },
              {
                "value": "15"
              },
              {
                "value": "10"
              }
            ]
          }
        ]
      },
      
    ],
    "lineset": [
      {
        "seriesname": "Handling To Wo",
        "showValues": "0",
        "data": [
          {
            "value": "1.22"
          },
          {
            "value": "0.81"
          },
          {
            "value": "3.93"
          },
          {
            "value": "3.88"
          },
          {
            "value": "3.91"
          },
          {
            "value": "4.89"
          },
          {
            "value": "6.49"
          },
          {
            "value": "6.97"
          },
          {
            "value": "8.12"
          },
          {
            "value": "7.38"
          },
          {
            "value": "7.51"
          },
          {
            "value": "5.23"
          },
          {
            "value": "7.29"
          }
        ]
      }
    ]

  }

  line4 = {
    "chart": {
      "caption": "HANDLING TO WO_IN AMOUNT",
      "xAxisName": "",
      "pYAxisName": "",
      "sYAxisName": "",
      "numberPrefix": "",
      "exportenabled": "1",
      "numbersuffix": "",
      "sNumberSuffix": " ",
      "pYAxisMaxValue": "3500000",
      "sYAxisMaxValue": "7",
      "divlineAlpha": "100",
      "divlineColor": "#999999",
      "divlineThickness": "1",
      "divLineDashed": "1",
      "divLineDashLen": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "dataset": [
          {
            "seriesname": "Sold",
            "data": [
              {
                "value": "111244"
              },
              {
                "value": "232321"
              },
              {
                "value": "244565"
              },
              {
                "value": "1111256"
              },
              {
                "value": "1212321"
              },
              {
                "value": "365222"
              },
              {
                "value": "1698745"
              },
              {
                "value": "1998987"
              },
              {
                "value": "2001215"
              },
              {
                "value": "1010101"
              },
              {
                "value": "225000"
              },
              {
                "value": "698745"
              },
              {
                "value": "656469"
              }
            ]
          },
          {
            "seriesname": "Repo",
            "data": [
              {
                "value": "1055654"
              },
              {
                "value": "223687"
              },
              {
                "value": "205547"
              },
              {
                "value": "1600210"
              },
              {
                "value": "1688797"
              },
              {
                "value": "445445"
              },
              {
                "value": "987654"
              },
              {
                "value": "123456"
              },
              {
                "value": "985421"
              },
              {
                "value": "875421"
              },
              {
                "value": "875422"
              },
              {
                "value": "874510"
              },
              {
                "value": "986532"
              }
            ]
          },
          {
            "seriesname": "Lunas",
            "data": [
              {
                "value": "200122"
              },
              {
                "value": "124578"
              },
              {
                "value": "123212"
              },
              {
                "value": "321455"
              },
              {
                "value": "124536"
              },
              {
                "value": "635241"
              },
              {
                "value": "784569"
              },
              {
                "value": "112233"
              },
              {
                "value": "223344"
              },
              {
                "value": "234567"
              },
              {
                "value": "456789"
              },
              {
                "value": "453278"
              },
              {
                "value": "114214"
              }
            ]
          }
        ]
      },
    ],
    "lineset": [
      {
        "seriesname": "Handling To Wo",
        "showValues": "0",
        "data": [
          {
            "value": "1.22"
          },
          {
            "value": "0.81"
          },
          {
            "value": "3.93"
          },
          {
            "value": "3.88"
          },
          {
            "value": "3.91"
          },
          {
            "value": "3.89"
          },
          {
            "value": "5.49"
          },
          {
            "value": "6.97"
          },
          {
            "value": "1.12"
          },
          {
            "value": "3.38"
          },
          {
            "value": "2.51"
          },
          {
            "value": "5.23"
          },
          {
            "value": "4.29"
          }
        ]
      }
    ]

  }

  line5 = {
    "chart": {
      "caption": "HANDLING_WO IN UNIT",
      "xAxisName": "",
      "pYAxisName": "",
      "sYAxisName": "",
      "numberPrefix": "",
      "exportenabled": "1",
      "numbersuffix": "",
      "sNumberSuffix": " ",
      "pYAxisMaxValue": "250",
      "sYAxisMaxValue": "2500",
      "divlineAlpha": "100",
      "divlineColor": "#999999",
      "divlineThickness": "1",
      "divLineDashed": "1",
      "divLineDashLen": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "dataset": [
          {
            "seriesname": "Sold",
            "showValues": "1",
            "data": [
              {
                "value": "1"
              },
              {
                "value": "1"
              },
              {
                "value": "4"
              },
              {
                "value": "24"
              },
              {
                "value": "29"
              },
              {
                "value": "24"
              },
              {
                "value": "67"
              },
              {
                "value": "86"
              },
              {
                "value": "104"
              },
              {
                "value": "80"
              },
              {
                "value": "96"
              },
              {
                "value": "103"
              },
              {
                "value": "81"
              }
            ]
          },
          {
            "seriesname": "Repo",
            "showValues": "1",
            "data": [
              {
                "value": "2"
              },
              {
                "value": "2"
              },
              {
                "value": "29"
              },
              {
                "value":"34"
              },
              {
                "value": "30"
              },
              {
                "value": "60"
              },
              {
                "value": "80"
              },
              {
                "value": "91"
              },
              {
                "value": "112"
              },
              {
                "value": "102"
              },
              {
                "value": "118"
              },
              {
                "value": "94"
              },
              {
                "value": "108"
              }
            ]
          },
          {
            "seriesname": "Lunas",
            "showValues": "1",
            "data": [
              {
                "value": "1"
              },
              {
                "value": "2"
              },
              {
                "value": "2"
              },
              {
                "value": "12"
              },
              {
                "value": "5"
              },
              {
                "value": "3"
              },
              {
                "value": "8"
              },
              {
                "value": "11"
              },
              {
                "value": "13"
              },
              {
                "value": "6"
              },
              {
                "value": "18"
              },
              {
                "value": "12"
              },
              {
                "value": "20"
              }
            ]
          }
        ]
      },
    ],
    "lineset": [
      {
        "seriesname": "Wo",
        "showValues": "0",
        "data": [
          {
            "value": "409"
          },
          {
            "value": "742"
          },
          {
            "value": "789"
          },
          {
            "value": "1185"
          },
          {
            "value": "894"
          },
          {
            "value": "1289"
          },
          {
            "value": "1356"
          },
          {
            "value": "1464"
          },
          {
            "value": "1565"
          },
          {
            "value": "1463"
          },
          {
            "value": "1810"
          },
          {
            "value": "2010"
          },
          {
            "value": "1756"
          }
        ]
      }
    ]

  }

  line6 = {
    "chart": {
      "caption": "HANDLING_WO IN AMOUNT (MILLION)",
      "xAxisName": "",
      "pYAxisName": "",
      "sYAxisName": "",
      "numberPrefix": "",
      "exportenabled": "1",
      "numbersuffix": "",
      "sNumberSuffix": " ",
      "pYAxisMaxValue": "3500",
      "sYAxisMaxValue": "40000",
      "divlineAlpha": "100",
      "divlineColor": "#999999",
      "divlineThickness": "1",
      "divLineDashed": "1",
      "divLineDashLen": "1",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "dataset": [
          {
            "seriesname": "Sold",
            "showValues": "1",
            "data": [
              {
                "value": "19"
              },
              {
                "value": "19"
              },
              {
                "value": "30"
              },
              {
                "value": "198"
              },
              {
                "value": "345"
              },
              {
                "value": "356"
              },
              {
                "value": "930"
              },
              {
                "value": "1097"
              },
              {
                "value": "1139"
              },
              {
                "value": "989"
              },
              {
                "value": "968"
              },
              {
                "value": "931"
              },
              {
                "value": "913"
              }
            ]
          },
          {
            "seriesname": "Repo",
            "showValues": "1",
            "data": [
              {
                "value": "19"
              },
              {
                "value": "17"
              },
              {
                "value": "455"
              },
              {
                "value": "406"
              },
              {
                "value": "570"
              },
              {
                "value": "1042"
              },
              {
                "value": "944"
              },
              {
                "value": "1955"
              },
              {
                "value": "1612"
              },
              {
                "value": "1585"
              },
              {
                "value": "1552"
              },
              {
                "value": "1553"
              },
              {
                "value": "1851"
              }
            ]
          },
          {
            "seriesname": "Lunas",
            "showValues": "1",
            "data": [
              {
                "value": "75"
              },
              {
                "value": "197"
              },
              {
                "value": "13"
              },
              {
                "value": "495"
              },
              {
                "value": "59"
              },
              {
                "value": "20"
              },
              {
                "value": "50"
              },
              {
                "value": "70"
              },
              {
                "value": "221"
              },
              {
                "value": "270"
              },
              {
                "value": "178"
              },
              {
                "value": "83"
              },
              {
                "value": "123"
              }
            ]
          }
        ]
      },
    ],
    "lineset": [
      {
        "seriesname": "Handling To Wo",
        "showValues": "0",
        "data": [
          {
            "value": "7681"
          },
          {
            "value": "13278"
          },
          {
            "value": "12762"
          },
          {
            "value": "20074"
          },
          {
            "value": "15519"
          },
          {
            "value": "22159"
          },
          {
            "value": "24589"
          },
          {
            "value": "28628"
          },
          {
            "value": "28027"
          },
          {
            "value": "26135"
          },
          {
            "value": "30124"
          },
          {
            "value": "33933"
          },
          {
            "value": "32356"
          }
        ]
      }
    ]

  }

  line7 = {
    "chart": {
      "caption": "PROPORSI NCI",
      // "numberPrefix": "$",
      "showPercentInTooltip": "0",
      "decimals": "1",
      "useDataPlotColorForLabels": "1",
      "theme": "fusion"
  },
  "data": [
      {
          "label": "JF",
          "value": "30.64"
      },
      {
          "label": "Non JF",
          "value": "69.96"
      }
  ]  
  }

  line8 = {
    "chart": {
      "caption": "TREND CI",
      "pYAxisName": "",
      "sYAxisName": "",
      "sYaxisMaxValue": "1200000",
      "pYAxisMaxValue": "800000",
      // "useEllipsesWhenOverflow":"0",
      "numbersuffix": "",
      "exportenabled": "1",
      // "plottooltext": "<b>$dataValue</b> Proyeksi 0+ $seriesName",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mei 2017"
          },
          {
            "label": "Jun 2017"
          },
          {
            "label": "Jul 2017"
          },
          {
            "label": "Agus 2017"
          },
          {
            "label": "Sep 2017"
          },
          {
            "label": "Okt 2017"
          },
          {
            "label": "Nov 2017"
          },
          {
            "label": "Des 2017"
          },
          {
            "label": "Jan 2018"
          },
          {
            "label": "Feb 2018"
          },
          {
            "label": "Mar 2018"
          },
          {
            "label": "Apr 2018"
          },
          {
            "label": "Mei 2018"
          },
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "NCI",
        "renderAs": "line",
        // "parentYAxis": "S",
        "data": [
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          }
        ]
      },
      {
        "seriesname": "BMRI - JF",
        "renderAs": "line",
        "data": [
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          },
          {
            "value": "0"
          }
        ]
      },
      {
        "seriesname": "JF",
        // "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "0"
          },
          {
            "value": "4536"
          },
          {
            "value": "9725"
          },
          {
            "value": "418142"
          },
          {
            "value": "136574"
          },
          {
            "value": "61408"
          },
          {
            "value": "243050"
          },
          {
            "value": "100321"
          },
          {
            "value": "309814"
          },
          {
            "value": "504937"
          },
          {
            "value": "219559"
          },
          {
            "value": "222528"
          },
          {
            "value": "287093"
          }
        ]
      },
      {
        "seriesname": "NON JF",
        // "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "100099"
          },
          {
            "value": "218580"
          },
          {
            "value": "265432"
          },
          {
            "value": "351805"
          },
          {
            "value": "295845"
          },
          {
            "value": "546138"
          },
          {
            "value": "676904"
          },
          {
            "value": "711019"
          },
          {
            "value": "692038"
          },
          {
            "value": "369568"
          },
          {
            "value": "587397"
          },
          {
            "value": "408757"
          },
          {
            "value": "424764"
          }
        ]
      },
      {
        "seriesname": "NCI",
        "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "100099"
          },
          {
            "value": "223116"
          },
          {
            "value": "275156"
          },
          {
            "value": "769947"
          },
          {
            "value": "417108"
          },
          {
            "value": "607545"
          },
          {
            "value": "919953"
          },
          {
            "value": "811340"
          },
          {
            "value": "1001852"
          },
          {
            "value": "874506"
          },
          {
            "value": "806957"
          },
          {
            "value": "631286"
          },
          {
            "value": "711857"
          }
        ]
      }
    ]
  }

  line9 = {
    "chart": {
      "caption": "VINTAGE_WO_IN UNIT",
      // "pYAxisName": "",
      "rotateLabels":"0",
      // "sYAxisName": "",
      // "sYaxisMaxValue": "1200000",
      "xAxisMaxValue": "80",
      // "useEllipsesWhenOverflow":"0",
      "numbersuffix": "",
      "exportenabled": "1",
      // "plottooltext": "<b>$dataValue</b> Proyeksi 0+ $seriesName",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "1"
          },
          {
            "label": "2"
          },
          {
            "label": "3"
          },
          {
            "label": "4"
          },
          {
            "label": "5"
          },
          {
            "label": "6"
          },
          {
            "label": "7"
          },
          {
            "label": "8"
          },
          {
            "label": "9"
          },
          {
            "label": "10"
          },
          {
            "label": "11"
          },
          {
            "label": "12"
          },
          {
            "label": "13"
          },
          {
            "label": "14"
          },
          {
            "label": "15"
          },
          {
            "label": "16"
          },
          {
            "label": "17"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Q4_16",
        "renderAs": "line",
        "anchorSides": "4",
        // "parentYAxis": "S",
        "data": [
          {
            "value": "20"
          },
          {
            "value": "30"
          },
          {
            "value": "33"
          },
          {
            "value": "34"
          },
          {
            "value": "23"
          },
          {
            "value": "15"
          },
          {
            "value": "55"
          },
          {
            "value": "44"
          },
          {
            "value": "65"
          },
          {
            "value": "46"
          },
          {
            "value": "77"
          },
          {
            "value": "34"
          },
          {
            "value": "65"
          },
          {
            "value": "66"
          },
          {
            "value": "34"
          },
          {
            "value": "12"
          },
          {
            "value": "6"
          }
        ]
      },
      {
        "seriesname": "Q1_17",
        "anchorSides": "5",
        "renderAs": "line",
        "data": [
          {
            "value": "54"
          },
          {
            "value": "34"
          },
          {
            "value": "44"
          },
          {
            "value": "23"
          },
          {
            "value": "43"
          },
          {
            "value": "22"
          },
          {
            "value": "43"
          },
          {
            "value": "67"
          },
          {
            "value": "73"
          },
          {
            "value": "23"
          },
          {
            "value": "65"
          },
          {
            "value": "65"
          },
          {
            "value": "12"
          },
          {
            "value": "5"
          },
          {
            "value": "12"
          },
          {
            "value": "65"
          },
          {
            "value": "61"
          }
        ]
      },
      {
        "seriesname": "Q2_17",
        // "parentYAxis": "S",
        "anchorSides":"3",
        "renderAs": "line",
        "data": [
          {
            "value": "30"
          },
          {
            "value": "35"
          },
          {
            "value": "41"
          },
          {
            "value": "41"
          },
          {
            "value": "13"
          },
          {
            "value": "61"
          },
          {
            "value": "24"
          },
          {
            "value": "10"
          },
          {
            "value": "30"
          },
          {
            "value": "50"
          },
          {
            "value": "21"
          },
          {
            "value": "22"
          },
          {
            "value": "28"
          },
          {
            "value": "60"
          },
          {
            "value": "68"
          },
          {
            "value": "79"
          },
          {
            "value": "66"
          }
        ]
      },
      {
        "seriesname": "Q3_17",
        // "parentYAxis": "S",
        "anchorSides":"6",
        "renderAs": "line",
        "data": [
          {
            "value": "11"
          },
          {
            "value": "28"
          },
          {
            "value": "26"
          },
          {
            "value": "35"
          },
          {
            "value": "29"
          },
          {
            "value": "54"
          },
          {
            "value": "67"
          },
          {
            "value": "71"
          },
          {
            "value": "69"
          },
          {
            "value": "36"
          },
          {
            "value": "58"
          },
          {
            "value": "40"
          },
          {
            "value": "42"
          },
          {
            "value": "34"
          },
          {
            "value": "45"
          },
          {
            "value": "65"
          },
          {
            "value": "78"
          }
        ]
      },
      {
        "seriesname": "Q4_17",
        // "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "19"
          },
          {
            "value": "22"
          },
          {
            "value": "27"
          },
          {
            "value": "76"
          },
          {
            "value": "41"
          },
          {
            "value": "60"
          },
          {
            "value": "53"
          },
          {
            "value": "40"
          },
          {
            "value": "52"
          },
          {
            "value": "6"
          },
          {
            "value": "57"
          },
          {
            "value": "63"
          },
          {
            "value": "71"
          }
        ]
      },
      {
        "seriesname": "Q1_18",
        "anchorSides":"7",
        // "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "69"
          },
          {
            "value": "62"
          },
          {
            "value": "47"
          },
          {
            "value": "76"
          },
          {
            "value": "41"
          },
          {
            "value": "60"
          },
          {
            "value": "53"
          },
          {
            "value": "50"
          },
          {
            "value": "22"
          },
          {
            "value": "6"
          },
          {
            "value": "52"
          },
          {
            "value": "43"
          },
          {
            "value": "71"
          }
        ]
      },
      {
        "seriesname": "Q2_18",
        // "parentYAxis": "S",
        "renderAs": "line",
        "data": [
          {
            "value": "19"
          },
          {
            "value": "22"
          },
          {
            "value": "27"
          },
          {
            "value": "76"
          },
          {
            "value": "41"
          },
          {
            "value": "60"
          },
          {
            "value": "53"
          },
          {
            "value": "40"
          },
          {
            "value": "52"
          },
          {
            "value": "6"
          },
          {
            "value": "57"
          },
          {
            "value": "63"
          },
          {
            "value": "71"
          }
        ]
      }
    ]
  }

  line10 = {
    "chart": {
      "caption": "VINTAGE_WO_IN AMOUNT (MILLION)",
      "pYAxisName": "",
      "rotateLabels":"0",
      // "sYAxisName": "",
      // "sYaxisMaxValue": "1200000",
      "xAxisMaxValue": "1800",
      // "useEllipsesWhenOverflow":"0",
      "numbersuffix": "",
      "exportenabled": "1",
      // "plottooltext": "<b>$dataValue</b> Proyeksi 0+ $seriesName",
      "theme": "fusion"
    },
    "categories": [
      {
        "category": [
          {
            "label": "0"
          },
          {
            "label": "1"
          },
          {
            "label": "2"
          },
          {
            "label": "3"
          },
          {
            "label": "4"
          },
          {
            "label": "5"
          },
          {
            "label": "6"
          },
          {
            "label": "7"
          },
          {
            "label": "8"
          },
          {
            "label": "9"
          },
          {
            "label": "10"
          },
          {
            "label": "11"
          },
          {
            "label": "12"
          },
          {
            "label": "13"
          },
          {
            "label": "14"
          },
          {
            "label": "15"
          },
          {
            "label": "16"
          },
          {
            "label": "17"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Q4_16",
        // "renderAs": "line",
        "anchorSides": "4",
        // "parentYAxis": "S",
        "data": [
          {
            "value": "1120"
          },
          {
            "value": "1230"
          },
          {
            "value": "1133"
          },
          {
            "value": "1534"
          },
          {
            "value": "1123"
          },
          {
            "value": "1215"
          },
          {
            "value": "1455"
          },
          {
            "value": "1644"
          },
          {
            "value": "1165"
          },
          {
            "value": "1146"
          },
          {
            "value": "1177"
          },
          {
            "value": "1234"
          },
          {
            "value": "1565"
          },
          {
            "value": "1666"
          },
          {
            "value": "1634"
          },
          {
            "value": "1612"
          },
          {
            "value": "1216"
          },
          {
            "value": "1616"
          }
        ]
      },
      {
        "seriesname": "Q1_17",
        "anchorSides": "5",
        // "renderAs": "line",
        "data": [
          {
            "value": "1154"
          },
          {
            "value": "1534"
          },
          {
            "value": "1444"
          },
          {
            "value": "1223"
          },
          {
            "value": "1443"
          },
          {
            "value": "1622"
          },
          {
            "value": "1243"
          },
          {
            "value": "1267"
          },
          {
            "value": "1173"
          },
          {
            "value": "1723"
          },
          {
            "value": "1765"
          },
          {
            "value": "1665"
          },
          {
            "value": "1712"
          },
          {
            "value": "1215"
          },
          {
            "value": "1512"
          },
          {
            "value": "1565"
          },
          {
            "value": "1561"
          },
          {
            "value": "1216"
          }
        ]
      },
      {
        "seriesname": "Q2_17",
        // "parentYAxis": "S",
        "anchorSides":"3",
        // "renderAs": "line",
        "data": [
          {
            "value": "1330"
          },
          {
            "value": "1335"
          },
          {
            "value": "1341"
          },
          {
            "value": "1341"
          },
          {
            "value": "1513"
          },
          {
            "value": "1461"
          },
          {
            "value": "1524"
          },
          {
            "value": "1410"
          },
          {
            "value": "1230"
          },
          {
            "value": "1650"
          },
          {
            "value": "1521"
          },
          {
            "value": "1522"
          },
          {
            "value": "1228"
          },
          {
            "value": "1560"
          },
          {
            "value": "1568"
          },
          {
            "value": "1579"
          },
          {
            "value": "1566"
          },
          {
            "value": "1116"
          }
        ]
      },
      {
        "seriesname": "Q3_17",
        // "parentYAxis": "S",
        "anchorSides":"6",
        // "renderAs": "line",
        "data": [
          {
            "value": "1311"
          },
          {
            "value": "1328"
          },
          {
            "value": "1426"
          },
          {
            "value": "1435"
          },
          {
            "value": "1229"
          },
          {
            "value": "1254"
          },
          {
            "value": "1267"
          },
          {
            "value": "1271"
          },
          {
            "value": "1569"
          },
          {
            "value": "1436"
          },
          {
            "value": "1658"
          },
          {
            "value": "1540"
          },
          {
            "value": "1542"
          },
          {
            "value": "1534"
          },
          {
            "value": "1545"
          },
          {
            "value": "1565"
          },
          {
            "value": "1578"
          },
          {
            "value": "1278"
          }
        ]
      },
      {
        "seriesname": "Q4_17",
        // "parentYAxis": "S",
        // "renderAs": "line",
        "data": [
          {
            "value": "1619"
          },
          {
            "value": "1622"
          },
          {
            "value": "1627"
          },
          {
            "value": "1776"
          },
          {
            "value": "1441"
          },
          {
            "value": "1460"
          },
          {
            "value": "1553"
          },
          {
            "value": "1640"
          },
          {
            "value": "1652"
          },
          {
            "value": "1536"
          },
          {
            "value": "1147"
          },
          {
            "value": "1463"
          },
          {
            "value": "1571"
          },
          {
            "value": "1078"
          },
          {
            "value": "1278"
          },
          {
            "value": "1178"
          },
          {
            "value": "1178"
          },
          {
            "value": "1278"
          }
        ]
      },
      {
        "seriesname": "Q1_18",
        "anchorSides":"7",
        // "parentYAxis": "S",
        // "renderAs": "line",
        "data": [
          {
            "value": "1269"
          },
          {
            "value": "1262"
          },
          {
            "value": "1247"
          },
          {
            "value": "1476"
          },
          {
            "value": "1441"
          },
          {
            "value": "1460"
          },
          {
            "value": "1553"
          },
          {
            "value": "1550"
          },
          {
            "value": "1522"
          },
          {
            "value": "1566"
          },
          {
            "value": "1652"
          },
          {
            "value": "1143"
          },
          {
            "value": "1171"
          },
          {
            "value": "1518"
          },
          {
            "value": "1528"
          },
          {
            "value": "1238"
          },
          {
            "value": "1338"
          },
          {
            "value": "1118"
          }
        ]
      },
      {
        "seriesname": "Q2_18",
        // "parentYAxis": "S",
        // "renderAs": "line",
        "data": [
          {
            "value": "1219"
          },
          {
            "value": "1222"
          },
          {
            "value": "1427"
          },
          {
            "value": "1476"
          },
          {
            "value": "1541"
          },
          {
            "value": "1560"
          },
          {
            "value": "1553"
          },
          {
            "value": "1640"
          },
          {
            "value": "1652"
          },
          {
            "value": "1236"
          },
          {
            "value": "1357"
          },
          {
            "value": "1363"
          },
          {
            "value": "1271"
          },
          {
            "value": "1356"
          },
          {
            "value": "1458"
          },
          {
            "value": "1457"
          },
          {
            "value": "1333"
          },
          {
            "value": "1232"
          }
        ]
      }
    ]
  }

  width = 0.42 * screen.width
  height = 0.4 * screen.height
  type = 'mscombidy2d'
  type2 = 'msstackedcolumn2dlinedy'
  type3 = 'pie3d'
  line = 'msline'
  dataFormat = 'json'

  dataSourceLine1 = this.line1
  dataSourceLine2 = this.line2
  dataSourceLine3 = this.line3
  dataSourceLine4 = this.line4  
  dataSourceLine5 = this.line5
  dataSourceLine6 = this.line6
  dataSourceLine7 = this.line7
  dataSourceLine8 = this.line8
  dataSourceLine9 = this.line9
  dataSourceLine10 = this.line10
  collapsed: boolean = true;

  getCurrentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(this.getCurrentUser);

  list_area = {
    "app": "mdm",
    "method":"getBranchArea",
    "data":null
  }

  parameter_kode_cabang = {
    "data": "WHERE BRANCH_TYPE = 'BR' ORDER BY BRANCH_NAME ASC"
  }

  parameter_kode_area = {
    "data": "WHERE BRANCH_PARENT = '"+this.currentUser["data"].resultUserProfileLocation[0].branch_code+"' ORDER BY BRANCH_NAME ASC"
  }

  parameter_kode_ho = {
    "data": "WHERE BRANCH_TYPE = 'BR' AND BRANCH_TYPE NOT IN ('AR','HO') ORDER BY BRANCH_NAME ASC"
  }

  constructor(private service: ServicesService) { }

  
  list_portfolio_motor = [
    'NMCY',
    'UMCY',
    'MMCY',
    'CMCY'
  ];

  list_portfolio_mobil = [
    'NCAR',
    'UCAR',
    'MCAR',
    'CCAR'
  ]

  list_object = [
    'MOBIL',
    'MOTOR'
  ];

  list_produk = [
    'CAPTIVE',
    'MULTIGUNA CAPTIVE',
    'MULTIGUNA NON CAPTIVE',
    'NON CAPTIVE'
  ]

  list_portfolio;
  areaDisable;
  area;
  listArea;
  portfolio;
  produk;
  object;
  disableArea=false;
  disableBranch=false;
  setStatus;
  list_cabang = []

  ngOnInit() {
  }

  filterObject(type:any){
    if(type == "MOBIL"){
      this.list_portfolio = this.list_portfolio_mobil;
      this.portfolio = this.list_portfolio[0];
    }else if(type == "MOTOR"){
      this.list_portfolio = this.list_portfolio_motor
      this.portfolio = this.list_portfolio[0];
    }
  }

  getFilter(){
    
  }

}
