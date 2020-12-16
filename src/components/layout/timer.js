import React from 'react'
import Timer from 'react-compound-timer'

const ElectionTimer = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return <div className="timer">

        <div>
            <h3>၂၀၂၀ပြည့်နှစ်၊<br></br>ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲ<br></br>နိုဝင်ဘာလ၊ (၈)ရက်</h3>
        </div>

        <Timer
            initialTime={60000 * 60 * 1080 + 5000}
            direction="backward"
            checkpoints={[
                {
                    time: 60000 * 60 * 1080,
                    callback: () => console.log('Checkpoint A'),
                },
                {
                    time: 60000 * 60 * 1080 - 5000,
                    callback: () => console.log('Checkpoint B'),
                }
            ]}
        >
            <h3>
                <Timer.Days /> ရက်၊ <br></br>
                <Timer.Hours /> နာရီ၊
                <Timer.Minutes /> မိနစ်၊
                <Timer.Seconds /> စက္ကန့်  
            </h3>
        </Timer>
        <div style={{ paddingTop: "0px" }}>
            <h3>Today: {date}</h3>
        </div>
    </div>

}

export default ElectionTimer
