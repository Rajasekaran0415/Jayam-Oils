import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="text-center my-4">

      <a
        href="https://wa.me/916369803832?text=Hi%20Jayam%20Oils,%20I%20want%20to%20place%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg px-4 py-3 shadow"
        style={{
          borderRadius: "50px",
          fontWeight: "600",
        }}
      >
        <FaWhatsapp
          size={28}
          className="me-2"
        />

        Order via WhatsApp

      </a>

    </div>
  );
}

export default Whatsapp;