import React from "react";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">What can I do next?</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/connections"
          >
            <i className="fas fa-link mr-2" />
            Configure other identity providers
          </a>
        </h6>
        <p>
          MUONS SAS es una empresa Colombiana que brinda soluciones del sector
          eléctrico, destacando el diseño, construcción, mantenimiento y
          fabricación de proyectos para los sectores residencial, industrial,
          hospitalario y gubernamental. Nuestras soluciones buscan cumplir los
          más altos estándares de calidad y satisfacción de nuestros clientes.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/multifactor-authentication"
          >
            <i className="fas fa-link mr-2" />
            Enable Multi-Factor Authentication
          </a>
        </h6>
        <p>
          Add an extra layer of security by enabling Multi-factor
          Authentication, requiring your users to provide more than one piece of
          identifying information. Push notifications, authenticator apps, SMS,
          and DUO Security are supported.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/anomaly-detection"
          >
            <i className="fas fa-link mr-2" />
            Anomaly Detection
          </a>
        </h6>
        <p>
          Auth0 can detect anomalies and stop malicious attempts to access your
          application. Anomaly detection can alert you and your users of
          suspicious activity, as well as block further login attempts.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/rules"
          >
            <i className="fas fa-link mr-2" />
            Learn About Rules
          </a>
        </h6>
        <p>
          Rules are JavaScript functions that execute when a user authenticates
          to your application. They run once the authentication process is
          complete, and you can use them to customize and extend Auth0's
          capabilities.
        </p>
      </div>
    </div>
  </div>
);

export default HomeContent;
