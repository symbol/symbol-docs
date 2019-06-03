def indent(line, num_spaces):
    line_indented = (num_spaces * ' ') + line
    return line_indented


def merge_dicts(dicts_a, dicts_b):
    for dict_a in dicts_a:
        for dict_b in dicts_b:
            if dict_a['key'] == dict_b['key']:
                for k, v in dict_b.items():
                    dict_a[k] = v
    return dicts_a


def clean_dicts(dicts):
    for d in dicts:
        d['key'] = d['key'].replace("!", "")
    return dicts


def clean_line(description):
    return description.replace('\\c', 'Returns') \
        .replace('\\a ', '') \
        .replace('\\note', '*Note*:')\
        .replace('std::', '')\
        .replace('\n', '')


def clean_entity(entity):
    return entity \
        .lstrip() \
        .replace('DEFINE_', '') \
        .replace('_RESULT', '')\
        .lower() \
        .replace('_', ' ')\
        .title() \
        .replace('hash', 'Hash', 1) \
        .replace('secret', 'Secret', 1) \
        .replace('Neutral', 'Neutral_') \
        .rstrip()\
        .replace(' ', '')
