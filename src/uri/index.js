// @flow

import _ from 'lodash';

import sample from '../sample';
import string from '../string';
import integer from '../integer';

/**
   * Generate a random URI, e.g., `https://adl2j.goodeggs.com/ax/faj23`
 * @param {*} domain 
 */
function uri (domain?: string = 'goodeggs.com'): string {
  const uriCharset = 'abcdefghijklmnopqrstuvwxyz_1234567890';
  return [
    sample(['http', 'https']),
    '://',
    sample([
      `${string(integer(1, 7), uriCharset)}.`,
      '']),
    domain,
    '/',
    _.times(integer(1,5), () =>
      string(integer(1, 8), uriCharset)
    ).join('/')
  ].join('');
}

export default uri;
