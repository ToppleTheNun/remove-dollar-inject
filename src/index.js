import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { parse } from 'babylon';

/**
 * Removes any $inject assignment expressions from a given source string.
 *
 * Will return an empty string for any null/undefined/void values.
 *
 * @param {string} source String from which to remove any $inject
 * @return {string} Source string without $inject assignment expressions
 */
export default function removeDollarInject(source = '') {
  // If we aren't given a source string, return an empty string.
  if (!source) {
    return '';
  }

  // Parse the source string into an AST using Babylon.
  const sourceAst = parse(source);

  // Modify the AST to remove any $inject expressions.
  traverse(sourceAst, {
    enter(path) {
      if (path.node.type !== 'AssignmentExpression') {
        return;
      }
      const left = path.get('left');
      const right = path.get('right');
      if (
        left.node.type !== 'MemberExpression' ||
        right.node.type !== 'ArrayExpression'
      ) {
        return;
      }
      const property = left.get('property');
      if (
        property.node.type !== 'Identifier' ||
        !property.node.name ||
        property.node.name !== '$inject'
      ) {
        return;
      }
      path.remove();
    }
  });

  // Convert the modified AST into a JSON representation using babel-generator.
  const output = generate(sourceAst, { comments: true }, source);

  // Return the code field from the JSON representation or an empty string if unable.
  return output.code || '';
}
