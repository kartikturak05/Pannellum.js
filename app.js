const viewer = pannellum.viewer('panorama', {
    default: {
      firstScene: 'scene1', // Initial scene
    },
    scenes: {
      scene1: {
        type: 'equirectangular',
        panorama: 'floor.jpeg',
        autoLoad: true,
        hotSpots: [
          {
            pitch:  -39.36, // Vertical position of the hotspot
            yaw: 28.13, // Horizontal position of the hotspot
            type: 'scene', // Hotspot type (for a clickable point)
            text: 'Go Inside Bedroom', // Tooltip text
            clickHandlerFunc: () => viewer.loadScene('scene2'), // Load second scene
          },
        ],
      },
      scene2: {
        // type: 'cubemap',
        // cubeMap: [
        //     './room1.jpeg', './room2.jpeg',
        //     './room1.jpeg', './room2.jpeg',
        //     './room1.jpeg', './room2.jpeg',
        // ],
        type:'equirectangular',
        panorama: 'room3.jpeg',
        autoLoad: true,
        hfov: 360,
        hotSpots: [
          {
            pitch: -12,
            yaw: 160.65,
            type: 'scene',
            text: 'Go inside the Washroom',
            clickHandlerFunc: () => viewer.loadScene('scene3'), // Back to first scene
          },
        ],
      },
      scene3: {
        type: 'equirectangular',
        panorama: 'washroom.jpeg',
        autoLoad: true,
        hfov: 360,
        hotSpots: [
          {
            pitch: -12,
            yaw: 160.65,
            type: 'scene',
            text: 'Go inside the Bedroom',
            clickHandlerFunc: () => viewer.loadScene('scene2'), // Back to first scene
          },
        ],
      },
    },
  });