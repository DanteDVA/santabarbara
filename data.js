var APP_DATA = {
  "scenes": [
    {
      "id": "0-esternovialetto",
      "name": "ESTERNO/VIALETTO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.48924736487315457,
        "pitch": -0.17629674083714875,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 1.1323171026616592,
          "pitch": 0.144257446643401,
          "rotation": 0,
          "target": "1-esternoingresso-casa"
        },
        {
          "yaw": -0.7081800269052714,
          "pitch": 0.015131894021187975,
          "rotation": 0,
          "target": "11-cortile-interno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-esternoingresso-casa",
      "name": "ESTERNO/INGRESSO CASA",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.128947224893185,
        "pitch": -0.03232106915348254,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 3.1186279566482433,
          "pitch": 0.015848909554401658,
          "rotation": 0,
          "target": "2-ingressodisimpegno"
        },
        {
          "yaw": 1.5235209443003361,
          "pitch": -0.05511941555788269,
          "rotation": 0,
          "target": "0-esternovialetto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingressodisimpegno",
      "name": "INGRESSO/DISIMPEGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.610177410727939,
        "pitch": 0.13162550730474365,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 1.790445667669598,
          "pitch": -0.0035831418169678386,
          "rotation": 0,
          "target": "3-cucinapranzo"
        },
        {
          "yaw": -1.6818876038693489,
          "pitch": 0.052992236397878756,
          "rotation": 0,
          "target": "4-soggiorno"
        },
        {
          "yaw": -3.034839115892403,
          "pitch": -0.17326840022843903,
          "rotation": 0,
          "target": "7-disimpegno-p1"
        },
        {
          "yaw": 0.09842014124757448,
          "pitch": 0.02601783699981297,
          "rotation": 0,
          "target": "1-esternoingresso-casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cucinapranzo",
      "name": "CUCINA/PRANZO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.0805315037413905,
        "pitch": 0.2981397957510268,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -0.7402442818267776,
          "pitch": 0.15344048600931082,
          "rotation": 0,
          "target": "5-sottoscaladisimpegno"
        },
        {
          "yaw": 0.34892893058924557,
          "pitch": 0.181232339744394,
          "rotation": 0,
          "target": "2-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-soggiorno",
      "name": "SOGGIORNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.5271170839012678,
        "pitch": 0.19829421101767863,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 2.1790485292157404,
          "pitch": 0.0212953182090736,
          "rotation": 0,
          "target": "5-sottoscaladisimpegno"
        },
        {
          "yaw": 0.8966133197668089,
          "pitch": 0.022451986920446032,
          "rotation": 0,
          "target": "2-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sottoscaladisimpegno",
      "name": "SOTTOSCALA/DISIMPEGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.0955933205123536,
        "pitch": 0.061265445931343976,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.9617659835178394,
          "pitch": 0.07095755961382366,
          "rotation": 0,
          "target": "4-soggiorno"
        },
        {
          "yaw": 0.1708222908226933,
          "pitch": 0.07627829973702838,
          "rotation": 0,
          "target": "6-bagno-pt"
        },
        {
          "yaw": -0.5910490138380879,
          "pitch": 0.06679488775922948,
          "rotation": 0,
          "target": "3-cucinapranzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bagno-pt",
      "name": "BAGNO PT",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.991471505988601,
        "pitch": 0.34554158774845334,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -0.11152425414300104,
          "pitch": 0.11244136973582286,
          "rotation": 0,
          "target": "5-sottoscaladisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-disimpegno-p1",
      "name": "DISIMPEGNO P1",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.1735355150474582,
        "pitch": 0.15964297127221272,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 3.136481210393809,
          "pitch": 0.6083075008556467,
          "rotation": 0,
          "target": "2-ingressodisimpegno"
        },
        {
          "yaw": 1.9209797162429467,
          "pitch": 0.13068845745375413,
          "rotation": 0,
          "target": "8-camera-1"
        },
        {
          "yaw": -1.6602522155575237,
          "pitch": 0.11049896672000159,
          "rotation": 0,
          "target": "10-bagno-p1"
        },
        {
          "yaw": -2.14952632875535,
          "pitch": 0.11026146076997989,
          "rotation": 0,
          "target": "9-camera-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-camera-1",
      "name": "CAMERA 1",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.693437624000758,
        "pitch": 0.08505016802111243,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.7498847315929407,
          "pitch": 0.02945869514188182,
          "rotation": 0,
          "target": "7-disimpegno-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-camera-2",
      "name": "CAMERA 2",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.11047182004393363,
        "pitch": 0.40468672699367403,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -0.38855637569432844,
          "pitch": 0.08215816261573039,
          "rotation": 0,
          "target": "11-cortile-interno"
        },
        {
          "yaw": 2.150492991817462,
          "pitch": 0.06594055633599538,
          "rotation": 0,
          "target": "7-disimpegno-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bagno-p1",
      "name": "BAGNO P1",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.03351207043908566,
        "pitch": 0.5596738857863812,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.9385786976341635,
          "pitch": 0.19148494505789948,
          "rotation": 0,
          "target": "7-disimpegno-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cortile-interno",
      "name": "CORTILE INTERNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.1258810132454204,
        "pitch": -0.0022144126869569902,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.975397356673863,
          "pitch": -0.3364284744903099,
          "rotation": 0,
          "target": "9-camera-2"
        },
        {
          "yaw": 0.1738730475598924,
          "pitch": 0.03598321449441144,
          "rotation": 0,
          "target": "12-box-auto"
        },
        {
          "yaw": -1.4816399622995942,
          "pitch": 0.2899051021654593,
          "rotation": 0,
          "target": "0-esternovialetto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-box-auto",
      "name": "BOX AUTO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.13241892960286,
        "pitch": 0.13000246827936834,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -3.129319549645073,
          "pitch": 0.12767803523605004,
          "rotation": 0,
          "target": "0-esternovialetto"
        },
        {
          "yaw": 0.09645721286288556,
          "pitch": 0.11940552270242222,
          "rotation": 0,
          "target": "11-cortile-interno"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
