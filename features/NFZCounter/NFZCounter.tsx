const NFZCounter = () => {
  return (
    <div style={containerStyles}>
      <h3
        style={{
          color: textStyles.mainTextColor,
          fontWeight: textStyles.mainTextWeight,
        }}
      >
        280{" "}
        <span
          style={{
            color: textStyles.subTextColor,
            fontWeight: textStyles.subTextWeight,
            fontSize: textStyles.subTextSize,
          }}
        >
          NFZ
        </span>
      </h3>
      <div className="h-[23px] flex items-center justify-center">
        <div style={emptyGaugeStyles}>
          <div style={gaugeStyles} />
        </div>
        <div style={gaugeBallStyles} />
      </div>
    </div>
  );
};

const containerStyles = {
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "#1B1B1B",
  border: "2px solid #5B5B5B",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const textStyles = {
  mainTextColor: "#FFFFFF",
  mainTextWeight: "bold",
  mainTextSize: "20px",
  subTextColor: "#AAAAAA",
  subTextWeight: "normal",
  subTextSize: "14px",
};

const emptyGaugeStyles = {
  width: "100%",
  height: "7px",
  backgroundColor: "#5B5B5B",
  borderRadius: "99px",
};

const gaugeStyles = {
  width: "70%",
  height: "100%",
  backgroundColor: "#806FE1",
  borderRadius: "99px",
};

const gaugeBallStyles = {
  position: "absolute",
  left: "70%",
  backgroundColor: "#806FE1",
  width: "23px",
  height: "23px",
  borderRadius: "100%",
};
export default NFZCounter;
