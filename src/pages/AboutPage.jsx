import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or services</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href='/'>Back To HomePage</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
