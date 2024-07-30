import "./button.styles.scss";
const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div className="button-group">
      <button
        className={`${BUTTON_TYPES_CLASSES[buttonType]} button-container`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
