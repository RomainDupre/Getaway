export const DIALOGUE = {
    67: {
        id: 67,
        name: 'Panneau Colisée et Bibliothèque',
        complexChoices: false,
        description: [
            {
                text: '↑ Colisée et Bibliothèque',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    68: {
        id: 68,
        name: 'Panneau Cabanon',
        complexChoices: false,
        description: [
            {
                text: '← Cabanon',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    96: {
        id: 96,
        name: 'Panneau Château',
        complexChoices: false,
        description: [
            {
                text: '→ Château',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    97: {
        id: 97,
        name: 'Panneau Fontaine',
        complexChoices: false,
        description: [
            {
                text: '↓ Fontaine',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    103: {
        id: 103,
        name: 'Cameleon',
        complexChoices: false,
        description: [
            {
                text: 'Hey yo seigneur, y’a un p’tit problème avec le pont, t’as vu il semblerait qu’il soit cassé, mais t’inquiète pô, j’ai vu la fée partir vers La Fontaine en disant qu’elle avait une solution.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'P’t’être qu’tu devrais aller taper la causette avec elle !',
                yes: {
                    text: 'Ok',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    200: {
        id: 200,
        name: 'Le roi ',
        complexChoices: false,
        description: [
            {
                text: 'Un livre d’une couverture bleue vous interpelle, vous l’ouvrez, une image vous ressemblant étonnement y est dessinée',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« En l’an 1326, un jour sombre arriva, les bois de Rivelia furent menacés par le chaos, les trolls, des créatures de nature violente, se retrouvèrent évincés de leur terre natale par les neiges éternelles.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Sans habitat, ils n’eurent d’autres choix que de partir à la recherche d’une nouvelle terre fertile pour s’installer, Rivelia était sur leur passage, et leur dévolu se jeta sur ce havre de paix.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Le Roi de Rivelia, dans sa grande clémence, compris assez vite les besoins des trolls, voulant éviter une guerre meurtrière pour son peuple, il leur offra une partie de ses terres au sud, fraiche, fertile, d’une grande puissance magique et inutilisée, elle semblait parfaite pour ces créatures difformes.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'Cependant, elles étaient résolues à se battre pour récupérer cette forêt, la guerre était inévitable. »',
                yes: {
                    text: 'Fermer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    201: {
        id: 201,
        name: 'Le frère du roi',
        complexChoices: false,
        description: [
            {
                text: 'Ce livre s’intitule « Au héros d’une guerre oubliée »',
                yes: {
                    text: 'Ouvrir le livre',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« Le héros de la guerre de 1326, est sans conteste le frère du Roi, qui aurait pensé qu’un loup solitaire, discret, vivant dans l’ombre de son frère, se révèlerait être la clé d’une victoire écrasante contre un peuple d’une violence inouïe et d’une force de loin supérieur au peuple de Rivelia.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Le frère du roi, DarkSasoupex de Konoha, est en réalité un stratège sans pareil, ainsi qu’un guerrier d’une qualité rare pour ce monde, et d’une loyauté sans faille envers son frère qu’il admire en tout point.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Il remporta la guerre avec son frère, les trolls, vaincus, n’eurent d’autres choix que d’accepter les terres que leur proposait le roi.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'La condition était d’y rester sous la surveillance de son frère, ses prouesses martiales durant cette guerre le rendaient parfaitement qualifié pour tenir ces bêtes en respect, mission qu’il accepta sans hésiter en l’honneur de son frère. »',
                yes: {
                    text: 'Fermer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    202: {
        id: 202,
        name: ' L’histoire du monde',
        complexChoices: false,
        description: [
            {
                text: 'Une forte essence magique se dégage d’un livre, vous le saisissez, sans avoir à l’ouvrir, vous connaissez son contenu...',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« En ce monde, des zones méconnues telle que le bois de Rivelia, concentrent de forte quantité de magie, perturbant la flore qui s’y développe tant elle est puissante, mais la rendant idéale pour les créatures empreintes de magie tel que les fées, les homme lézards, ou encore les mandragores.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'La magie influence les créatures qui la côtoient, cependant l’inverse est tout aussi vrai, c’est ainsi que naquirent les Terres Désolées d’Anter’Hia.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Autrefois un bosquet paisible aux vents magiques puissants se retrouva corrompu lorsqu’un groupe de dryades s’installe.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'Ces dryades, marginalisées par leurs congénères car leur esprit était empli de haine et de rancœur, souillèrent la magie présente en ces lieux par leurs pensées viles et noires, le mal était fait. ',
                yes: {
                    text: 'Suite',
                    next: 5
                },
                no: null,
                other : null
            },
            {
                text: 'La magie se transforme en malédiction, aspirant l\'énergie vitale des êtres peuplant l\'endroit.',
                yes: {
                    text: 'Suite',
                    next: 6
                },
                no: null,
                other : null
            },
            {
                text: 'Elle pétrifie les plus faibles et manipule les plus forts pour les pousser à la destruction. ',
                yes: {
                    text: 'Suite',
                    next: 7
                },
                no: null,
                other : null
            },
            {
                text: 'Elle calcine les cœurs et brise les esprits.',
                yes: {
                    text: 'Suite',
                    next: 8
                },
                no: null,
                other : null
            },
            {
                text: 'Elle assèche les sols, se propage à tous ceux qui s\'approchent trop près des terres, et étend son influence toujours plus loin - jusqu\'à ce que l\'esprit corrompu des dryades ne puisse plus alimenter suffisamment la malédiction...',
                yes: {
                    text: 'Suite',
                    next: 9
                },
                no: null,
                other : null
            },
            {
                text: 'Depuis ce jour, Les Terres Désolées sont condamnées et interdites à tous. »',
                yes: {
                    text: 'Reposer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    526: {
        id: 526,
        name: 'Fée fontaine',
        complexChoices: false,
        description: [
            {
                text: 'Bonjour mon seigneur. En quoi puis-je vous être utile ?',
                yes: {
                    text: 'Comment traverser la rivière ?',
                    next: 1
                },
                no: {
                    text: 'Rien, merci',
                    next: 3
                },
                other:{
                    text: 'Pourquoi “mon seigneur” ?',
                    next: 4
                }
            },
            {
                text: 'Connaissez-vous la légende des bottes d’Hermès ? Ce sont des bottes magiques qui permettent à son porteur de marcher sur l’eau.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Par chance, il se trouve qu’elles sont coincées dans cette fontaine. Malheureusement, celui qui les a posées ici les a bloqués par une magie qui me dépasse…',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Passez une bonne journée',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Car vous êtes notre seigneur, …. Enfin me semble-t-il ?',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
    603: {
        id: 603,
        name: 'Bibliothéquaire',
        complexChoices: false,
        description: [
            {
                text: 'Bonjour, que puis-je faire pour vous ?',
                yes: {
                    text: 'Rien, merci',
                    next: 1
                },
                no: {
                    text: 'Je ne comprends pas ce qu’il se passe',
                    next: 2
                },
                other:null
            },
            {
                text: 'Bonne journée',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Peut-être que nos livres pourraient vous aider, vous devriez jeter un coup d’œil aux rangés 3 et 4 du bas, et a la cinquième du haut.',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
}