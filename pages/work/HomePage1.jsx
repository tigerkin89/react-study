function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
  }
  
export default function HomePage1() {
    return (
      <div>
        <Header />
      </div>
    );
  }