const BEM = (block) => {

    const bem = (element, modifiers) => {
        let baseClass = block + (element ? '__' + element : '');
        let classes = baseClass;
        if (modifiers) {
            if (typeof modifiers === 'string') {
                classes += ' ' + baseClass + '--' + modifiers;
            } else if (typeof modifiers === 'object') {
                for (let modifier in modifiers) {
                    if (modifiers.hasOwnProperty(modifier) && modifiers[modifier]) {
                        classes += ' ' + baseClass + '--' + modifier;
                    }
                }
            }
        }
        return classes;
    };

    bem.toString = () => block;

    return bem;
};

module.exports = BEM;
