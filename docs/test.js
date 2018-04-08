import { article, heading } from 'ariamodule'
import { a, img, p } from 'htmlmodule'
import { abstract, cover, subtitle } from '../lib'

article({
    parentNode : document.body,
    children : [
        cover({
            ownerElement : img({
                src : 'https://www.w3.org/StyleSheets/TR/2016/logos/W3C',
                width : 100
            })
        }),
        heading('Digital Publishing WAI-ARIA Module 1.0'),
        subtitle('W3C Recommendation 14 December 2017'),
        abstract([
            heading('Abstract'),
            p('Enabling users of assistive technologies to find their way through Web content ' +
                'requires embedding semantic metadata about Web document structural divisions. ' +
                'This is particularly important for structural divisions of long-form documents ' +
                'and goes along with embedding semantic metadata about Web-application widgets ' +
                'and behaviors for assistive technologies. This specification defines ' +
                'a set of WAI-ARIA roles specific to helping users of assistive technologies ' +
                'navigate through such long-form documents.'),
            p([
                'This document is part of the WAI-ARIA suite described in the ',
                a({
                    href : 'http://www.w3.org/WAI/intro/aria.php',
                    children : 'WAI-ARIA Overview.'
                })
            ])
        ])
    ]
})
