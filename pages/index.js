import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Hello</h1>
      <div>
        <Link href="/signin" legacyBehavior>
          <button>Sign In</button>
        </Link>
        <Link href="/signup" legacyBehavior>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}