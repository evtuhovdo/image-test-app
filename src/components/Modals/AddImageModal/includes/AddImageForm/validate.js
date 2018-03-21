import isURL from 'validator/lib/isURL';
import isEmpty from 'lodash/isEmpty';

function validate(values) {
  const errors = {};
  if (isEmpty(values.url) || !isURL(values.url)) {
    errors.url = 'Provided url is invalid';
  }

  return errors;
}

export default validate;
