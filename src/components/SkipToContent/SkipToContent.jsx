import { Link } from 'react-router-dom';
import {node, string,} 'prop-types';

function SkipToContent({ children, ...restProps }) {
  return (
    <Link to={href} {...restProps}>
      {children}
    </Link>
  );
}

SkipToContent.propTypes = {
  href: oneOfType([string]),
  children: node.isRequired,
};
