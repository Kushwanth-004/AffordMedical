import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logError } from "../components/logger";

const Redirection = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      const data = JSON.parse(localStorage.getItem("shortened") || "[]");
      const match = data.find((item) => item.shortcode === shortcode);

      if (match) {
        window.location.href = match.longUrl;
      } else {
        await logError(`Invalid shortcode: ${shortcode}`, "Redirection");
        alert("Invalid shortcode");
        navigate("/");
      }
    };

    handleRedirect();
  }, [shortcode, navigate]);

  return null;
};

export default Redirection;
