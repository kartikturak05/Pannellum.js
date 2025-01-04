const viewer = pannellum.viewer('panorama', {
    default: {
      firstScene: 'scene1', // Initial scene
    },
    scenes: {
      scene1: {
        type: 'equirectangular',
        panorama: 'panoromaImage.jpg',
        autoLoad: true,
        mousedown: function(event) {
          // Log the current yaw and pitch on click
          const pitch = viewer.getPitch(); // Get the pitch value
          const yaw = viewer.getYaw(); // Get the yaw value
          alert(`Hotspot position: pitch=${pitch}, yaw=${yaw}`);
        },
        hotSpots: [
          {
            pitch: -43.92, // Vertical position of the hotspot
            yaw: 123.23, // Horizontal position of the hotspot
            type: 'scene', // Hotspot type (for a clickable point)
            text: 'Go to Second Panorama', // Tooltip text
            clickHandlerFunc: () => viewer.loadScene('scene2'), // Load second scene
          },
        ],
      },
      scene2: {
        type: 'equirectangular',
        panorama: 'panoromaImage2.jpg',
        autoLoad: true,
        hotSpots: [
          {
            pitch: -5,
            yaw: -45,
            type: 'info',
            text: 'Back to First Panorama',
            clickHandlerFunc: () => viewer.loadScene('scene1'), // Back to first scene
          },
        ],
      },
    },
  });


  viewer.on('click', () => {
    const pitch = viewer.getPitch();
    const yaw = viewer.getYaw();
    console.log(`Current pitch: ${pitch}, Current yaw: ${yaw}`);
  });
  