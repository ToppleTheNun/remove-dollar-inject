import j from 'jscodeshift';

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

  // Parse the source string into an AST using jscodeshift.
  const root = j(source);
  // Find all AssignmentExpressions that have left MemberExpressions
  // with an Identifier of $inject.
  const assignmentExpressions = root.find(j.AssignmentExpression, {
    left: {
      type: 'MemberExpression',
      property: {
        type: 'Identifier',
        name: '$inject'
      }
    },
    right: {
      type: 'ArrayExpression'
    }
  });
  // Remove the expressions.
  assignmentExpressions.remove();

  // Recreate the AST.
  return root.toSource();
}
