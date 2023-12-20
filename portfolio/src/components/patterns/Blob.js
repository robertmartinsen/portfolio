import React from "react"
import classes from "../../styles/components/patterns/Blob.module.scss"
import heroClasses from "../../styles/components/Hero.module.scss"

function BlobSVG() {
  return (
    <div className={`${classes.blobs} ${heroClasses.introText}`}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(5, 22, 51)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(11, 110, 60)" }} />
          </linearGradient>
        </defs>
        <path
          fill="none"
          strokeWidth="7px"
          stroke="url(#gradient)"
          id="animatedBlob"
        >
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M401.5,327.5Q373,405,292,413Q211,421,140.5,379Q70,337,87.5,258.5Q105,180,155,117Q205,54,300.5,60.5Q396,67,413,158.5Q430,250,401.5,327.5Z;
            M414.5,332.5Q382,415,294.5,427Q207,439,133,390.5Q59,342,72,256.5Q85,171,144,106.5Q203,42,300.5,53Q398,64,422.5,157Q447,250,414.5,332.5Z;
            M413,324.5Q369,399,284.5,434.5Q200,470,114,413.5Q28,357,50.5,261Q73,165,135.5,94.5Q198,24,292.5,51Q387,78,422,164Q457,250,413,324.5Z;
            M404,332.5Q382,415,295.5,421.5Q209,428,126.5,388.5Q44,349,42.5,249Q41,149,123,100.5Q205,52,282,82.5Q359,113,392.5,181.5Q426,250,404,332.5Z;
            M401.5,327.5Q373,405,292,413Q211,421,140.5,379Q70,337,87.5,258.5Q105,180,155,117Q205,54,300.5,60.5Q396,67,413,158.5Q430,250,401.5,327.5Z;
            "
          ></animate>
        </path>
      </svg>
    </div>
  )
}

export default BlobSVG
