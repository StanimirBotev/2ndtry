import Link from 'next/link';

export default function SignUp() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2>Sign Up</h2>
      <form style={{display:'flex',flexDirection:'column',gap:'1em',width:'220px'}}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/signin">Sign In</Link>
      </p>
    </div>
  );
}