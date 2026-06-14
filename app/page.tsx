export default function Home() {
  return (
    <main dir="rtl" style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      
      <header style={{
        padding: '16px 5%',
        borderBottom: '2px solid #d32f2f',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        background: '#121212'
      }}>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #d32f2f 0%, #000 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '16px'
        }}>
          جش
        </div>
        <h1 style={{margin: 0, fontSize: '20px', fontWeight: '700'}}>شبكة جيشان الإخبارية</h1>
      </header>

      <section style={{
        textAlign: 'center',
        padding: '80px 5%',
        background: 'linear-gradient(180deg, #121212 0%, #0a0a0a 100%)',
        borderBottom: '1px solid #222'
      }}>
        <h2 style={{fontSize: '36px', marginBottom: '16px', fontWeight: '800'}}>
          شبكة جيشان الإخبارية
        </h2>
        <p style={{fontSize: '18px', opacity: 0.85}}>
          صوت الشعب الجنوبي - ننقل الحقيقة كما هي
        </p>
      </section>

      <section style={{padding: '60px 5%'}}>
        <h3 style={{fontSize: '28px', marginBottom: '40px', borderRight: '4px solid #d32f2f', paddingRight: '12px'}}>
          آخر الأخبار
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          
          <article style={{background: '#121212', borderRadius: '12px', overflow: 'hidden', border: '1px solid #222'}}>
            <div style={{height: '180px', background: 'linear-gradient(135deg, #1e3a8a 0%, #000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px'}}>📰</div>
            <div style={{padding: '20px'}}>
              <h4 style={{margin: '0 0 10px', fontSize: '18px'}}>عنوان الخبر الاول يظهر هنا</h4>
              <p style={{margin: 0, fontSize: '13px', opacity: 0.6}}>13 يونيو 2026</p>
            </div>
          </article>

          <article style={{background: '#121212', borderRadius: '12px', overflow: 'hidden', border: '1px solid #222'}}>
            <div style={{height: '180px', background: 'linear-gradient(135deg, #166534 0%, #000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px'}}>📢</div>
            <div style={{padding: '20px'}}>
              <h4 style={{margin: '0 0 10px', fontSize: '18px'}}>عنوان الخبر الثاني يظهر هنا</h4>
              <p style={{margin: 0, fontSize: '13px', opacity: 0.6}}>13 يونيو 2026</p>
            </div>
          </article>

          <article style={{background: '#121212', borderRadius: '12px', overflow: 'hidden', border: '1px solid #222'}}>
            <div style={{height: '180px', background: 'linear-gradient(135deg, #7c2d12 0%, #000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px'}}>⚡</div>
            <div style={{padding: '20px'}}>
              <h4 style={{margin: '0 0 10px', fontSize: '18px'}}>عنوان الخبر الثالث يظهر هنا</h4>
              <p style={{margin: 0, fontSize: '13px', opacity: 0.6}}>13 يونيو 2026</p>
            </div>
          </article>

        </div>
      </section>

      <footer style={{
        padding: '30px 5%',
        textAlign: 'center',
        borderTop: '1px solid #222',
        background: '#121212',
        fontSize: '14px',
        opacity: 0.6
      }}>
        © 2026 شبكة جيشان الإخبارية - جميع الحقوق محفوظة
      </footer>
    </main>
  )
}
