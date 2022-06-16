//points for figerprint
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
}

// drawing funtion
export const drawHand = (predictions, ctx) => {
    if(predictions.length>0){
        predictions.forEach((prediction) => {
            const landmarks = prediction.landmarks;
            
            //loop through fingers
            for(let j=0; j < Object.keys(fingerJoints).length; j++){
                let finger = Object.keys(fingerJoints)[j];
                //loop through joints
                for(let k=0; k < fingerJoints[finger].length - 1; k++){
                    //get pair of joints
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k+1];

                    //draw line
                    ctx.beginPath();
                    ctx.moveTo(landmarks[firstJointIndex][0], landmarks[firstJointIndex][1]);
                    ctx.lineTo(landmarks[secondJointIndex][0], landmarks[secondJointIndex][1]);
                    ctx.strokeStyle = 'blue';
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }
            
            

            for (let i=0; i<landmarks.length; i++){
                //get x point
                const x = landmarks[i][0];
                //get y point
                const y = landmarks[i][1];
                //draw point
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = '#00ff00';
                ctx.fill();

            }
        });
    }
}