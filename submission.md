# นายสุกัลย์ กูณาพืช 6310110518

# สรุปการทำงาน
Web Application ข้างต้นเป็น App ที่ให้เลือก และเรียงคำให้ถูกต้อง เมื่อเรียงคำถูกต้องจะมี Effect Firework เกิดขึ้นพร้อมข้อความสำเร็จ และจะมีปุ่ม reset ไว้สำหรับ reset ค่า หรือเริ่มเกมส์ใหม่, แต่ถ้าหากเรียงตัวอักษรผิด ข้อความที่ active ไว้จะหายไป พร้อมกับแสดงข้อความให้ลองใหม่อีกครั้ง เมื่อติดตั้ง react เสร็จสิ้น ในขั้นตอนการ implement จะเริ่มต้นสร้างโฟลเดอร์ components และ lib Folder ไว้ใน src โฟลเดอร์เพื่อจัดระเบียบโครงสร้างโฟลเดอร์ให้เป็นระเบียบ ในโฟลเดอร์ Component จะจัดเก็บ Components ต่างๆ ไม่ว่าจะเป็น CharacterCard, WordCard ในส่วนของ lib folder จะจัดเก็บ libraries ต่างๆ ในที่นี้จะเป็น canvas-confett โดยสามารถติดตั้งโดยใช้ npm i canvas-confetti ในส่วนของ App.js จะ import WordCard โดยจะส่ง props value คือ "hello" ในส่วนของ WordCard Component จะสร้าง state ไว้เก็บค่าจากฟังก์ชัน prepareStateFromWord โดยจะส่ง prop value ไป และจะ return ค่ากลับมา จากนั้นจะนำค่าที่ได้มา map (state.chars) โดยจะส่งค่าไปยัง CharacterCard Component อีกทีนึง โดย prop ที่ส่งไปจะมี value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}

ในส่วนถัดไปจะสร้างปุ่มเพื่อ reset ค่า โดยจะติดตั้ง react-icon โดยจะใช้คำสั่ง npm install react-icons --save ถ้า state.completed เป็น true จะให้แสดงปุ่ม reset โดยจะให้แสดงหลังจากตอบถูก 5 วินาที โดยจะใช้ setTimeout เป็นตัวจัดการ

![react-icon](https://user-images.githubusercontent.com/100436146/182798402-8d4db4fd-be3c-4492-8fab-6ff19c137416.png)

ในส่วนถัดไปจะสร้างปุ่มเพื่อ reset ค่า โดยจะติดตั้ง react-icon โดยจะใช้คำสั่ง npm install react-icons --save ถ้า state.completed เป็น true จะให้แสดงปุ่ม reset โดยจะให้แสดงหลังจากตอบถูก 5 วินาที โดยจะใช้ setTimeout เป็นตัวจัดการ เมื่อกด จะ reload page ใหม่ และตัวอักษรจะสลับตำแหน่งกัน เป็นเพราะมีการใช้ loadash lib โดยใช้คำสั่ง _.shuffle(Array.from(word)) จะเป็นการ random ตำแหน่งอักษร

# หน้าจอเริ่มต้น

![card game start](../card-game/backgroundinfo/card_game_start.png)

# เมื่อเรียงตัวอักษรถูก

![card game correct](../card-game/backgroundinfo/card_game_correct.png)

# เมื่อเรียงตัวอักษรผิด

![card game wrong](../card-game/backgroundinfo/card_game_wrong.png)