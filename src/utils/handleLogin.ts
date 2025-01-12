export const handleLogin = () => {
  // ส่งคำขอไปยัง API ของ backend เพื่อเริ่มกระบวนการล็อกอิน
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/login`; // นี้จะเปลี่ยนเส้นทางไปยัง Spotify Login
};