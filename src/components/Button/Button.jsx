import './Button.css';

// props: { mode, type, state, }

function Button(props) {
  return (
    <button type={props.type ?? 'button'} className="Button">
      {props.children}
    </button>
  );
}

export default Button;
