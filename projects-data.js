// Central data store for the project detail pages.
// TODO: once you've uploaded real photos, update the "images" arrays to match
// your actual filenames, and fill in "links.demo" once you have a live demo link.
window.PROJECTS = {
    "differential-drive-robot": {
        title: "Autonomous Differential Drive Robot",
        date: "Jan 2025 – Apr 2025",
        tags: ["ROS2", "SLAM", "Nav2", "Raspberry Pi 4B"],
        role: "Owned the ROS2 software stack: built the URDF model, configured ros2_control, integrated SLAM Toolbox and Nav2, and tuned localization and navigation until the robot moved reliably on real hardware.",
        description: "Designed and built a differential-drive mobile robot from scratch, integrating a Raspberry Pi 4B, RPLIDAR A1M8, planetary geared DC motors with encoder feedback, a custom power distribution board, and L298N motor drivers.",
        highlights: [
            "Hardware: Raspberry Pi 4B, RPLIDAR A1M8, planetary geared DC motors with encoders, custom PDS board, L298N motor drivers",
            "Software: URDF model, ros2_control configuration, SLAM Toolbox and Nav2 integration, localization and navigation tuning"
        ],
        images: [
            "images/projects/differential-drive-robot/1.jpg",
            "images/projects/differential-drive-robot/2.jpg",
            "images/projects/differential-drive-robot/3.png"
        ],
        links: { demo: "" }
    },
    "goal-directed-robot-sim": {
        title: "Autonomous Goal-Directed Robot Simulation",
        date: "Sep 2025 – Present",
        tags: ["ROS2", "Gazebo", "RViz2"],
        role: "Built the Gazebo simulation and the ROS2 navigation stack behind it, so the robot could plan a path to any goal point, avoid obstacles along the way, and show its reasoning live in RViz2.",
        description: "Simulated a robot in Gazebo and RViz2 that autonomously navigates to user-specified goals with obstacle avoidance and real-time visualization.",
        highlights: [],
        images: [
            "images/projects/goal-directed-robot-sim/1.jpg",
            "images/projects/goal-directed-robot-sim/demo1.webm"
        ],
        links: { demo: "" }
    },
    "home-automation-opencv": {
        title: "Computer Vision-Based Home Automation",
        date: "Aug 2024 – Oct 2024",
        tags: ["OpenCV", "YOLOv8", "ESP32"],
        role: "Designed the full computer-vision pipeline end to end — real-time human detection with YOLOv8 and OpenCV driving automatic control of lights, fans, and sockets, plus gesture-based fan-speed adjustment relayed to an ESP32.",
        description: "Implemented a computer vision-based home automation system using OpenCV, YOLOv8, and ESP32 for real-time human detection and gesture-based device control.",
        highlights: [
            "Real-time human detection with YOLOv8 driving automated control of lights, fans, and power sockets",
            "Gesture-based fan-speed adjustment, communicated to the hardware over ESP32"
        ],
        images: [],
        links: { demo: "" }
    },
    "uniball-robot": {
        title: "Uniball Self-Balancing Robot",
        date: "Jan 2025 – Feb 2025",
        tags: ["ESP32", "MPU6050", "Control system"],
        role: "Handled the electronics and firmware: wired the ESP32, MPU6050 IMU, and encoder-equipped N20 motors, then wrote the Kalman-filter sensor fusion and balancing control that kept the robot upright and steerable.",
        description: "Developed a self-balancing spherical robot using an ESP32, MPU6050 IMU, N20 geared motors with encoder feedback, and a custom chassis.",
        highlights: [
            "Kalman filter-based sensor fusion for stable orientation estimation",
            "Custom chassis with N20 geared motors and encoder feedback for directional control"
        ],
        images: [
            "images/projects/uniball-robot/demo1.mp4",
            "images/projects/uniball-robot/1.jpg"
        ],
        links: { demo: "" }
    },
    "pandoobi": {
        title: "Pandoobi — Underwater Robot",
        date: "Aug 2024 – Jan 2025",
        tags: ["Raspberry Pi 5", "BLDC thrusters", "Robotics"],
        role: "Built the embedded control system on a Raspberry Pi 5 — driving four 920KV BLDC thrusters, streaming live video, and reading the MPU6050 and BMP280 sensors for stable underwater navigation — and helped fabricate the waterproof housing and chassis.",
        description: "Designed and built a semi-tethered underwater exploration robot from scratch, integrating a Raspberry Pi 5, four 920KV BLDC thrusters, a custom power distribution system, a waterproof camera enclosure, an MPU6050 IMU, and a BMP280 sensor.",
        highlights: [
            "Semi-tethered design with a waterproof camera enclosure and custom power distribution",
            "Four 920KV BLDC thrusters for maneuvering; MPU6050 and BMP280 for stable underwater navigation",
            "Grand Finalist, Robofest 2025 (National Level)"
        ],
        images: [
            "images/projects/pandoobi/1.jpg",
            "images/projects/pandoobi/2.png",
            "images/projects/pandoobi/3.png",
            "images/projects/pandoobi/4.png",
            "images/projects/pandoobi/5.jpg",
            "images/projects/pandoobi/demo1.mp4",
            "images/projects/pandoobi/demo2.mp4"
        ],
        links: { demo: "" }
    },
    "sign-language-detection": {
        title: "Real-Time Sign Language Detection",
        date: "Feb 2024 – Mar 2024",
        tags: ["TensorFlow", "OpenCV", "Python"],
        role: "Built the entire system solo: collected and prepared the gesture dataset, trained the TensorFlow model, and wired up real-time OpenCV inference.",
        description: "Designed and implemented a real-time hand gesture recognition system using TensorFlow and OpenCV, achieving 83 percent detection accuracy.",
        highlights: [
            "Reached 83% real-time detection accuracy",
            "Solo build: dataset preparation, model training, and inference pipeline"
        ],
        images: [],
        links: { demo: "" }
    },
    "voice-activated-ai-assistant": {
        title: "Voice-Activated Offline AI Assistant",
        date: "Sep 2025 – Present",
        tags: ["LLM", "Speech recognition", "AI"],
        role: "Built the entire pipeline solo — wake-word detection, on-device speech recognition, and local LLM inference — so the assistant could hear, understand, and respond to voice commands without any cloud dependency.",
        description: "Developing a fully offline AI assistant using wake-word detection, local speech recognition, and on-device LLM inference to execute voice commands in real time.",
        highlights: [
            "Wake-word detection with OpenWakeWord",
            "On-device speech recognition and local LLM inference (Llama / Mistral), with no cloud dependency"
        ],
        images: [],
        links: { demo: "" }
    },
    "offline-robotics-rag": {
        title: "Offline Robotics Assistant using RAG",
        date: "Jan 2026 – Feb 2026",
        tags: ["Python", "RAG", "LLM"],
        role: "Extended the assistant solo with a Retrieval-Augmented Generation layer in Python, then profiled and optimized the inference pipeline to cut latency for real-time command execution.",
        description: "Developed a fully offline AI assistant in Python with wake-word detection, speech recognition, and on-device LLM inference, optimized for real-time command execution without cloud dependency.",
        highlights: [
            "Retrieval-Augmented Generation layer built in Python",
            "Latency-optimized inference pipeline for real-time command execution"
        ],
        images: [],
        links: { github: "https://github.com/hamadahero/Offline_robotics_assistant", demo: "" }
    },
    "robocon": {
        title: "Robocon — 2024 & 2025",
        date: "Nov 2023 – Aug 2025",
        tags: ["Raspberry Pi 5", "Jetson Nano", "Laser navigation"],
        role: "2024 (Seed Plantation Challenge): joined as a first-year newbie on the team, mostly learning how the robot's systems worked and how the build process came together. 2025 (Robot Basketball): stepped up as one of the software leads, owning the autonomous and remote-controlled behavior on Raspberry Pi 5 and Jetson Nano, with laser-based navigation.",
        description: "Robocon is the ABU Asia-Pacific Robot Contest, an annual international university robotics competition where teams design and build autonomous and remote-controlled robots to complete a game-specific challenge that changes every year. I competed in it twice: in 2024, the theme was a seed plantation challenge, and I was a newbie on the team, mostly observing and understanding how things worked. In 2025, the theme changed to Robot Basketball, and by then I had grown into one of the software leads for the team.",
        highlights: [
            "2024 — Seed Plantation Challenge: Round 3 finish, top 30 of 120+ teams, as a newbie learning the ropes",
            "2025 — Robot Basketball: software lead, autonomous and remote-controlled modes with laser-based navigation on Raspberry Pi 5 and Jetson Nano"
        ],
        images: [
            "images/projects/robocon/1.jpg",
            "images/projects/robocon/2.jpg"
        ],
        links: { demo: "" }
    }
};
