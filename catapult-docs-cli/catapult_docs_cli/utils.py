import re

def indent(line, num_spaces):
    """Adds num_spaces spaces before the line.

    Args:
        line (str): Content of the line.
        num_spaces (int): Number of spaces to add before the line.

    Returns:
        str: Indented line.
    """
    line_indented = (num_spaces * ' ') + line
    return line_indented


def merge_dicts(dicts_a, dicts_b):
    """Merges two lists of dictionaries by key attribute.

    Example:
        da = [{'key': 'a', 'value': 1}, {'key': 'b', 'value': 2}]
        db = [{'key': 'b', 'value': 3, 'color':'pink'}, {'key': 'c', 'value': 4}]
        merge_dicts(da, db) = [{'key': 'a', 'value': 1}, {'key': 'b', 'value': 3, 'color':'pink'}]
    Args:
        dicts_a (list of objs): First dictionary.
        dicts_b (list of objs): Second dictionary.

    Returns:
        list of objs: List of merged dicts.
    """
    for dict_a in dicts_a:
        for dict_b in dicts_b:
            if dict_a['key'] == dict_b['key']:
                for k, v in dict_b.items():
                    dict_a[k] = v
    return dicts_a


def clean_dicts(dicts):
    """Removes tags from dict keys.

    The tags were necessary to identify uniquely a property if there is another one with the same name.

    Args:
        dicts (list of objs): List of dictionaries.

    Returns:
        list of obj: Cleaned list of dictionaries.
    """
    for d in dicts:
        d['key'] = d['key'].replace("!", "")
    return dicts


def clean_line(description):
    """Formats catapult-server custom tags into readable strings.

    Args:
        description (str): Line to format.

    Returns:
        str: Formatted line.
    """
    description = re.sub(r'\\c ([^ ]*)', r'<code class="docutils literal"><span class="pre">\1</span></code>', description)
    return description.replace('\\a ', '') \
        .replace('\\note', '<br/><b>Note</b>:') \
        .replace('std::', '') \
        .replace('\n', '')


def clean_entity(entity):
    """Gets the entity name from the catapult-server status-error definition.

    Args:
        entity (str): Raw entity to format.

    Returns:
        str: Formatted entity name.
    """
    return entity \
        .lstrip() \
        .replace('DEFINE_', '') \
        .replace('_RESULT', '') \
        .lower() \
        .replace('_', ' ') \
        .title() \
        .replace('Neutral', 'Neutral_') \
        .rstrip() \
        .replace(' ', '')
