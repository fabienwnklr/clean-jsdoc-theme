/**
 * @overview adds a tag @externe or @interne to any object
 * @module plugins/custom-tags
 * @author Winkler Fabien
 */

/**
 * Define the custom tags
 * @param {Object} dictionary - the dictionary object
 */
exports.defineTags = function(dictionary) {
    dictionary.defineTag('externe', {
        mustHaveValue: false,
        canHaveType: false,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            if (!doclet.customTags) {
                doclet.customTags = [];
            }

            var description = '';

            if (tag.value && tag.value.description) {
                description = tag.value.name + ' ' + tag.value.description;
            }

            var externe = {
                title: tag.title,
                description: description
            };

            doclet.customTags.push(externe);
        }
    });

    dictionary.defineTag('interne', {
        mustHaveValue: false,
        canHaveType: false,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            if (!doclet.customTags) {
                doclet.customTags = [];
            }

            var description = '';

            if (tag.value && tag.value.description) {
                description = tag.value.name + ' ' + tag.value.description;
            }

            var interne = {
                title: tag.title,
                description: description
            };

            doclet.customTags.push(interne);
        }
    });
};
