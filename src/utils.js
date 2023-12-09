export const shuffle = (array) => {
    let index = Math.floor(Math.random() * array.length);
    let particularArray = array[index];
    return ([...particularArray])
}

export const ShowHide = (array, temp, id) => {
    let tempArray = temp.map((obj) => {
        if (obj.id.toString() === id.toString()) {
            return {
                ...obj,
                value: array[id - 1]?.value
            };
        } else {
            return (obj);
        }
    })
    return tempArray;
}

export const showBombs = (array, temp) => {
    array.map((x, i) => {
        if (x.value === "💣") {
            temp[i].value = x.value;
            return temp[i];
        } else {
            return temp[i];
        }
    })
}

export const array = [
    [
        { id: 1, value: "💣" },
        { id: 2, value: 1 },
        { id: 3, value: 1 },
        { id: 4, value: 1 }
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 1 },
        { id: 4, value: 1 }
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: "💣" },
        { id: 4, value: 1 }
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 1 },
        { id: 4, value: "💣" }
    ]

]

export const easyArrayLeveltwo = [
    [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 1 },
        { id: 4, value: 2 },
        { id: 5, value: "💣" },
        { id: 6, value: 2 },
        { id: 7, value: 2 },
        { id: 8, value: "💣" },
        { id: 9, value: 2 }
    ],

    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 2 },
        { id: 5, value: "💣" },
        { id: 6, value: 2 },
        { id: 7, value: 1 },
        { id: 8, value: 1 },
        { id: 9, value: 1 },
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
        { id: 4, value: "💣" },
        { id: 5, value: 2 },
        { id: 6, value: "💣" },
        { id: 7, value: 1 },
        { id: 8, value: 2 },
        { id: 9, value: 1 }
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 2 },
        { id: 4, value: 1 },
        { id: 5, value: "💣" },
        { id: 6, value: "💣" },
        { id: 7, value: 1 },
        { id: 8, value: 2 },
        { id: 9, value: 2 }
    ],

    [
        { id: 1, value: 2 },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
        { id: 4, value: "💣" },
        { id: 5, value: "💣" },
        { id: 6, value: 1 },
        { id: 7, value: 2 },
        { id: 8, value: 2 },
        { id: 9, value: 1 }
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 1 },
        { id: 4, value: 2 },
        { id: 5, value: 2 },
        { id: 6, value: 2 },
        { id: 7, value: 1 },
        { id: 8, value: "💣" },
        { id: 9, value: 1 }
    ]
]

export const hardArrayLevelTwo = [
    [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 2 },
        { id: 5, value: 3 },
        { id: 6, value: "💣" },
        { id: 7, value: 1 },
        { id: 8, value: "💣" },
        { id: 9, value: 2 },
    ],

    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 1 },
        { id: 4, value: "💣" },
        { id: 5, value: 3 },
        { id: 6, value: 2 },
        { id: 7, value: 1 },
        { id: 8, value: 2 },
        { id: 9, value: "💣" },
    ],

    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 3 },
        { id: 4, value: 2 },
        { id: 5, value: "💣" },
        { id: 6, value: "💣" },
        { id: 7, value: 1 },
        { id: 8, value: 1 },
        { id: 9, value: 2 },
    ],

    [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 1 },
        { id: 4, value: 2 },
        { id: 5, value: 3 },
        { id: 6, value: 2 },
        { id: 7, value: "💣" },
        { id: 8, value: 2 },
        { id: 9, value: "💣" },
    ],

    [
        { id: 1, value: "💣" },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
        { id: 4, value: 3 },
        { id: 5, value: "💣" },
        { id: 6, value: 2 },
        { id: 7, value: 2 },
        { id: 8, value: "💣" },
        { id: 9, value: 2 },
    ],

    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 3 },
        { id: 5, value: "💣" },
        { id: 6, value: 3 },
        { id: 7, value: 2 },
        { id: 8, value: "💣" },
        { id: 9, value: 2 },
    ],
]

export const easyArrayLevelThree = [
    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: "💣" },
        { id: 4, value: 1 },
        { id: 5, value: 1 },
        { id: 6, value: "💣" },
        { id: 7, value: 3 },
        { id: 8, value: 2 },
        { id: 9, value: 2 },
        { id: 10, value: 3 },
        { id: 11, value: "💣" },
        { id: 12, value: 1 },
        { id: 13, value: "💣" },
        { id: 14, value: 2 },
        { id: 15, value: 1 },
        { id: 16, value: 1 }
    ]

    , [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 },
        { id: 4, value: "💣" },
        { id: 5, value: 2 },
        { id: 6, value: "💣" },
        { id: 7, value: 3 },
        { id: 8, value: 2 },
        { id: 9, value: "💣" },
        { id: 10, value: 3 },
        { id: 11, value: "💣" },
        { id: 12, value: 1 },
        { id: 13, value: 1 },
        { id: 14, value: 2 },
        { id: 15, value: 1 },
        { id: 16, value: 1 }
    ]

    , [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 1 },
        { id: 4, value: 1 },
        { id: 5, value: "💣" },
        { id: 6, value: 3 },
        { id: 7, value: "💣" },
        { id: 8, value: 1 },
        { id: 9, value: 2 },
        { id: 10, value: "💣", },
        { id: 11, value: 3 },
        { id: 12, value: 2 },
        { id: 13, value: 1 },
        { id: 14, value: 1, },
        { id: 15, value: 2 },
        { id: 16, value: "💣" }
    ]

    , [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 1 },
        { id: 5, value: 2 },
        { id: 6, value: 3 },
        { id: 7, value: "💣" },
        { id: 8, value: 1 },
        { id: 9, value: 1 },
        { id: 10, value: "💣" },
        { id: 11, value: 3 },
        { id: 12, value: 2 },
        { id: 13, value: 1 },
        { id: 14, value: 1 },
        { id: 15, value: 2 },
        { id: 16, value: "💣" }
    ]
]

export const hardArrayLevelThree = [
    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: "💣" },
        { id: 5, value: 1 },
        { id: 6, value: "💣" },
        { id: 7, value: "💣" },
        { id: 8, value: 2 },
        { id: 9, value: 2 },
        { id: 10, value: 3 },
        { id: 11, value: 4 },
        { id: 12, value: 2 },
        { id: 13, value: 1 },
        { id: 14, value: "💣" },
        { id: 15, value: 2 },
        { id: 16, value: "💣" }
    ]

    , [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 },
        { id: 4, value: 1 },
        { id: 5, value: 2 },
        { id: 6, value: "💣" },
        { id: 7, value: 3 },
        { id: 8, value: "💣" },
        { id: 9, value: 3 },
        { id: 10, value: "💣" },
        { id: 11, value: 4 },
        { id: 12, value: 2 },
        { id: 13, value: "💣" },
        { id: 14, value: 2 },
        { id: 15, value: 2 },
        { id: 16, value: "💣" }
    ]

    , [
        { id: 1, value: "💣" },
        { id: 2, value: 2 },
        { id: 3, value: 2 },
        { id: 4, value: "💣" },
        { id: 5, value: 3 },
        { id: 6, value: "💣" },
        { id: 7, value: 4 },
        { id: 8, value: 2 },
        { id: 9, value: 2 },
        { id: 10, value: "💣" },
        { id: 11, value: 3 },
        { id: 12, value: "💣" },
        { id: 13, value: 1 },
        { id: 14, value: 1 },
        { id: 15, value: 2 },
        { id: 16, value: 1 },
    ]

    , [
        { id: 1, value: "💣" },
        { id: 2, value: 3 },
        { id: 3, value: 2 },
        { id: 4, value: 1 },
        { id: 5, value: 2 },
        { id: 6, value: "💣" },
        { id: 7, value: "💣" },
        { id: 8, value: 1 },
        { id: 9, value: 2 },
        { id: 10, value: 4 },
        { id: 11, value: 3 },
        { id: 12, value: 2 },
        { id: 13, value: "💣" },
        { id: 14, value: 2 },
        { id: 15, value: "💣" },
        { id: 16, value: 1 },
    ]
]

export const easyArrayLevelFour = [
    [
        { id: 1, value: 1 },
        { id: 2, value: 1 },
        { id: 3, value: 2 },
        { id: 4, value: "💣" },
        { id: 5, value: 1 },
        { id: 6, value: 2 },
        { id: 7, value: "💣" },
        { id: 8, value: 4 },
        { id: 9, value: 2 },
        { id: 10, value: 2 },
        { id: 11, value: 3 },
        { id: 12, value: "💣" },
        { id: 13, value: 5 },
        { id: 14, value: "💣" },
        { id: 15, value: 2 },
        { id: 16, value: 3 },
        { id: 17, value: "💣" },
        { id: 18, value: 4 },
        { id: 19, value: "💣" },
        { id: 20, value: 2 },
        { id: 21, value: "💣" },
        { id: 22, value: 2 },
        { id: 23, value: 2 },
        { id: 24, value: 1 },
        { id: 25, value: 1 },
    ],
    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 3 },
        { id: 5, value: "💣" },
        { id: 6, value: 1 },
        { id: 7, value: "💣" },
        { id: 8, value: "💣" },
        { id: 9, value: "💣" },
        { id: 10, value: 2 },
        { id: 11, value: 2 },
        { id: 12, value: 4 },
        { id: 13, value: 5 },
        { id: 14, value: 4 },
        { id: 15, value: 2 },
        { id: 16, value: "💣" },
        { id: 17, value: 2 },
        { id: 18, value: "💣" },
        { id: 19, value: "💣" },
        { id: 20, value: 1 },
        { id: 21, value: 1 },
        { id: 22, value: 2 },
        { id: 23, value: 2 },
        { id: 24, value: 2 },
        { id: 25, value: 1 },
    ],
    [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 2 },
        { id: 4, value: 2 },
        { id: 5, value: 1 },
        { id: 6, value: "💣" },
        { id: 7, value: 2 },
        { id: 8, value: "💣" },
        { id: 9, value: "💣" },
        { id: 10, value: 1 },
        { id: 11, value: 2 },
        { id: 12, value: 4 },
        { id: 13, value: 5 },
        { id: 14, value: 4 },
        { id: 15, value: 2 },
        { id: 16, value: 1 },
        { id: 17, value: "💣" },
        { id: 18, value: "💣" },
        { id: 19, value: "💣" },
        { id: 20, value: 2 },
        { id: 21, value: 1 },
        { id: 22, value: 2 },
        { id: 23, value: 3 },
        { id: 24, value: 3 },
        { id: 25, value: "💣" },
    ],
    [
        { id: 1, value: "💣" },
        { id: 2, value: 3 },
        { id: 3, value: 3 },
        { id: 4, value: 2 },
        { id: 5, value: 1 },
        { id: 6, value: 2 },
        { id: 7, value: "💣" },
        { id: 8, value: "💣" },
        { id: 9, value: "💣" },
        { id: 10, value: 1 },
        { id: 11, value: 2 },
        { id: 12, value: 4 },
        { id: 13, value: 5 },
        { id: 14, value: 4 },
        { id: 15, value: 2 },
        { id: 16, value: 1 },
        { id: 17, value: "💣" },
        { id: 18, value: "💣" },
        { id: 19, value: 2 },
        { id: 20, value: "💣" },
        { id: 21, value: 1 },
        { id: 22, value: 2 },
        { id: 23, value: 2 },
        { id: 24, value: 2 },
        { id: 25, value: 1 },
    ]
]

export const hardArrayLevelFour = [
    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 2 },
        { id: 5, value: 1 },
        { id: 6, value: "💣" },
        { id: 7, value: 3 },
        { id: 8, value: "💣" },
        { id: 9, value: 3 },
        { id: 10, value: "💣" },
        { id: 11, value: 3 },
        { id: 12, value: 4 },
        { id: 13, value: 3 },
        { id: 14, value: "💣" },
        { id: 15, value: 2 },
        { id: 16, value: "💣" },
        { id: 17, value: "💣" },
        { id: 18, value: 3 },
        { id: 19, value: 3 },
        { id: 20, value: 2 },
        { id: 21, value: 2 },
        { id: 22, value: 3 },
        { id: 23, value: "💣" },
        { id: 24, value: 2 },
        { id: 25, value: "💣" },
    ],
    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 3 },
        { id: 4, value: "💣" },
        { id: 5, value: 2 },
        { id: 6, value: "💣" },
        { id: 7, value: 3 },
        { id: 8, value: 4 },
        { id: 9, value: "💣" },
        { id: 10, value: 3 },
        { id: 11, value: 2 },
        { id: 12, value: "💣" },
        { id: 13, value: 3 },
        { id: 14, value: 3 },
        { id: 15, value: "💣" },
        { id: 16, value: 2 },
        { id: 17, value: 3 },
        { id: 18, value: "💣" },
        { id: 19, value: 3 },
        { id: 20, value: 2 },
        { id: 21, value: 1 },
        { id: 22, value: "💣" },
        { id: 23, value: 2 },
        { id: 24, value: 2 },
        { id: 25, value: "💣" },
    ],
    [
        { id: 1, value: 1 },
        { id: 2, value: "💣" },
        { id: 3, value: 2 },
        { id: 4, value: 2 },
        { id: 5, value: "💣" },
        { id: 6, value: 2 },
        { id: 7, value: 3 },
        { id: 8, value: "💣" },
        { id: 9, value: 3 },
        { id: 10, value: 2 },
        { id: 11, value: 2 },
        { id: 12, value: "💣" },
        { id: 13, value: 3 },
        { id: 14, value: 3 },
        { id: 15, value: "💣" },
        { id: 16, value: "💣" },
        { id: 17, value: 3 },
        { id: 18, value: 4 },
        { id: 19, value: "💣" },
        { id: 20, value: 3 },
        { id: 21, value: 2 },
        { id: 22, value: "💣" },
        { id: 23, value: 3 },
        { id: 24, value: "💣" },
        { id: 25, value: 2 },
    ],
    [
        { id: 1, value: 2 },
        { id: 2, value: "💣" },
        { id: 3, value: 3 },
        { id: 4, value: "💣" },
        { id: 5, value: 2 },
        { id: 6, value: 3 },
        { id: 7, value: "💣" },
        { id: 8, value: 4 },
        { id: 9, value: 3 },
        { id: 10, value: "💣" },
        { id: 11, value: "💣" },
        { id: 12, value: 3 },
        { id: 13, value: 3 },
        { id: 14, value: "💣" },
        { id: 15, value: 2 },
        { id: 16, value: 2 },
        { id: 17, value: 3 },
        { id: 18, value: "💣" },
        { id: 19, value: 3 },
        { id: 20, value: 2 },
        { id: 21, value: "💣" },
        { id: 22, value: 2 },
        { id: 23, value: 2 },
        { id: 24, value: "💣" },
        { id: 25, value: 1 },
    ],
]