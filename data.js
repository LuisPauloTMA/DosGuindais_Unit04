var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit04_hall",
      "name": "Unit04_Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.8928742342404803,
        "pitch": 0.0042953158923850765,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5258447477288648,
          "pitch": 0.7092529158223133,
          "rotation": 0,
          "target": "1-unit04_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit04_living",
      "name": "Unit04_Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0412583723928268,
          "pitch": 0.3943326904414626,
          "rotation": 0,
          "target": "2-unit04_bedroom"
        },
        {
          "yaw": 0.8207433023755044,
          "pitch": 0.5763984445706996,
          "rotation": 1.5707963267948966,
          "target": "0-unit04_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unit04_bedroom",
      "name": "Unit04_Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.21899923717596081,
        "pitch": 0.02312148435653505,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.399175542931406,
          "pitch": 0.4355873467008884,
          "rotation": 4.71238898038469,
          "target": "1-unit04_living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DosGuindais_Unit04",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
