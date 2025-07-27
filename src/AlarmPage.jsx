// src/pages/AlarmPage.jsx
import React, { useEffect, useRef } from "react";
import { db, ref, onValue } from "./firebase";
import alarmSound from "./alarm.mp3";

function AlarmPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    const triggerRef = ref(db, "alarm/trigger");
    onValue(triggerRef, snapshot => {
      const value = snapshot.val();
      if (value === true && audioRef.current) {
        audioRef.current.play().catch(err => {
          console.warn(
            "Autoplay engellendi, kullanıcı etkileşimi gerekebilir.",
            err
          );
        });
      }
    });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Alarm Sayfası (Telefonda Aç)</h2>
      <audio ref={audioRef} src={alarmSound} preload='auto' />
    </div>
  );
}

export default AlarmPage;
