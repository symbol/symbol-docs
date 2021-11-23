# -*- encoding: utf-8 -*-
#
# (c) 2018 David Garcia (@dgarcia360)
# This code is licensed under MIT license (see LICENSE.md for details)


from docutils import nodes


class Contributor:

    def __init__(self, login, url, contributions=0, avatar_url=''):
        self.contributions = contributions
        self.login = login
        self.url = url
        self.contributions = contributions
        self.avatar_url = avatar_url

    def build(self):
        node_contributor = nodes.paragraph()
        if self.avatar_url:
            node_contributor += nodes.image(uri=self.avatar_url)
        node_contributor += nodes.reference(text=self.login, refuri=self.url)
        if self.contributions:
            node_contributor += nodes.Text(' - ' + str(self.contributions) + ' ' +
                                           ('contributions' if self.contributions != 1 else 'contribution'))
        return node_contributor


class ContributorsRepository:

    def __init__(self, contributors, reverse=True, limit=10, exclude=[]):
        self.contributors = sorted([c for c in contributors if c.login not in exclude],
                                   key=lambda c: c.contributions,
                                   reverse=reverse)[:limit]

    def build(self):
        node_list = nodes.bullet_list()
        node_list['classes'].append('ghcontributors')
        for contributor in self.contributors:
            node_contributor = nodes.list_item()
            node_contributor += contributor.build()
            node_list += node_contributor
        return node_list
