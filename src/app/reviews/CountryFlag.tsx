import ReactCountryFlag from "react-country-flag";

const CountryFlag = ({flagCode}: {flagCode: string}) => {
  return (
    <div>
      <ReactCountryFlag
        countryCode={flagCode}
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
          borderRadius: "50%", // For the circular look in your image
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CountryFlag;
