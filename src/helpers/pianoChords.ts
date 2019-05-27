let pianoChords = JSON.parse(`{
  "pianoChords": [
    {
      "type" : "Do",
      "chords": [
        {
          "name": "DO",
          "keys": [
            {"name": "Do"},
            {"name": "Mi"},
            {"name": "Sol"}
          ]
        },
        {
          "name": "DOm",
          "keys": [
            {"name": "Do"},
            {"name": "Mi b"},
            {"name": "Sol"}
          ]
        },
        {
          "name": "DO 7",
          "keys": [
            {"name": "Do"},
            {"name": "Mi"},
            {"name": "Sol"},
            {"name": "Si b"}
          ]
        },
        {
          "name": "DOm 7",
          "keys": [
            {"name": "Do"},
            {"name": "Mi b"},
            {"name": "Sol"},
            {"name": "Si b"}
          ]
        },

        {
          "name": "DO#",
          "keys": [
            {"name": "Do#"},
            {"name": "Fa"},
            {"name": "Sol#"}
          ]
        },
        {
          "name": "DO#m",
          "keys": [
            {"name": "Do#"},
            {"name": "Mi"},
            {"name": "Sol#"}
          ]
        },
        {
          "name": "DO# 7",
          "keys": [
            {"name": "Do#"},
            {"name": "Fa"},
            {"name": "Sol#"},
            {"name": "Si"}
          ]
        },
        {
          "name": "DO# 7m",
          "keys": [
            {"name": "Do#"},
            {"name": "Mi"},
            {"name": "Sol#"},
            {"name": "Si"}
          ]
        }
      ]
    },
    {
      "type": "Ré",
      "chords": [
        {
          "name": "Ré♭",
          "keys": [
            {"name": "Ré b"},
            {"name": "Si"},
            {"name": "La b"}
          ]
        },
        {
          "name": "Ré♭m",
          "keys": [
            {"name": "Ré b"},
            {"name": "Mi"},
            {"name": "La b"}
          ]
        },
        {
          "name": "Ré♭ 7",
          "keys": [
            {"name": "Ré b"},
            {"name": "Si"},
            {"name": "La b"},
            {"name": "Si"}
          ]
        },
        {
          "name": "Ré♭ 7m",
          "keys": [
            {"name": "Ré b"},
            {"name": "Mi"},
            {"name": "La b"},
            {"name": "Si"}
          ]
        },
    
        {
          "name": "Ré",
          "keys": [
            {"name": "Ré"},
            {"name": "Fa#"},
            {"name": "La"}
          ]
        },
        {
          "name": "Rém",
          "keys": [
            {"name": "Ré"},
            {"name": "Fa"},
            {"name": "La"}
          ]
        },
        {
          "name": "Ré 7",
          "keys": [
            {"name": "Ré"},
            {"name": "Fa#"},
            {"name": "La"},
            {"name": "Do"}
          ]
        },
        {
          "name": "Rém 7",
          "keys": [
            {"name": "Ré"},
            {"name": "Fa"},
            {"name": "La"},
            {"name": "Do"}
          ]
        },
        
        {
          "name": "Ré#",
          "keys": [
            {"name": "Ré#"},
            {"name": "Sol"},
            {"name": "La#"}
          ]
        },
        {
          "name": "Ré#m",
          "keys": [
            {"name": "Ré#"},
            {"name": "Fa#"},
            {"name": "La#"}
          ]
        },
        {
          "name": "Ré# 7",
          "keys": [
            {"name": "Ré#"},
            {"name": "Sol"},
            {"name": "La#"},
            {"name": "Do#"}
          ]
        },
        {
          "name": "Ré#m 7",
          "keys": [
            {"name": "Ré#"},
            {"name": "Fa#"},
            {"name": "La#"},
            {"name": "Do#"}
          ]
        }
      ]
    },
    {
      "type": "Mi",
      "chords": [
        {
          "name": "Mi♭",
          "keys": [
            {"name": "Mi b"},
            {"name": "Sol"},
            {"name": "Si b"}
          ]
        },
        {
          "name": "Mi♭m",
          "keys": [
            {"name": "Mi b"},
            {"name": "Sol b"},
            {"name": "Si b"}
          ]
        },
        {
          "name": "Mi♭ 7",
          "keys": [
            {"name": "Mi b"},
            {"name": "Sol"},
            {"name": "Si b"},
            {"name": "Ré b"}
          ]
        },
        {
          "name": "Mi♭m 7",
          "keys": [
            {"name": "Mi b"},
            {"name": "Sol b"},
            {"name": "Si b"},
            {"name": "Ré b"}
          ]
        },
    
        {
          "name": "Mi",
          "keys": [
            {"name": "Mi"},
            {"name": "Sol#"},
            {"name": "Si"}
          ]
        },
        {
          "name": "Mim",
          "keys": [
            {"name": "Mi"},
            {"name": "Sol"},
            {"name": "Si"}
          ]
        },
        {
          "name": "Mi 7",
          "keys": [
            {"name": "Mi"},
            {"name": "Sol#"},
            {"name": "Si"},
            {"name": "Ré"}
          ]
        },
        {
          "name": "Mim 7",
          "keys": [
            {"name": "Mi"},
            {"name": "Sol"},
            {"name": "Si"},
            {"name": "Ré"}
          ]
        }
      ]
    },
    {
      "type": "Fa",
      "chords": [
        {
          "name": "Fa",
          "keys": [
            {"name": "Fa"},
            {"name": "La"},
            {"name": "Do"}
          ]
        },
        {
          "name": "Fam",
          "keys": [
            {"name": "Fa"},
            {"name": "La b"},
            {"name": "Do"}
          ]
        },
        {
          "name": "Fa 7",
          "keys": [
            {"name": "Fa"},
            {"name": "La"},
            {"name": "Do"},
            {"name": "Mi b"}
          ]
        },
        {
          "name": "Fam 7",
          "keys": [
            {"name": "Fa"},
            {"name": "La b"},
            {"name": "Do"},
            {"name": "Mi b"}
          ]
        },
    
        {
          "name": "Fa#",
          "keys": [
            {"name": "Fa#"},
            {"name": "La#"},
            {"name": "Do#"}
          ]
        },
        {
          "name": "Fa#m",
          "keys": [
            {"name": "Fa#"},
            {"name": "La"},
            {"name": "Do#"}
          ]
        },
        {
          "name": "Fa# 7",
          "keys": [
            {"name": "Fa#"},
            {"name": "La#"},
            {"name": "Do#"},
            {"name": "Mi"}
          ]
        },
        {
          "name": "Fa#m 7",
          "keys": [
            {"name": "Fa#"},
            {"name": "La"},
            {"name": "Do#"},
            {"name": "Mi"}
          ]
        }
      ]
    },
    {
      "type": "Sol",
      "chords": [
        {
          "name": "Sol♭",
          "keys": [
            {"name": "Sol b"},
            {"name": "Si b"},
            {"name": "Ré b"}
          ]
        },
        {
          "name": "Sol♭m",
          "keys": [
            {"name": "Sol b"},
            {"name": "La"},
            {"name": "Ré b"}
          ]
        },
        {
          "name": "Sol♭ 7",
          "keys": [
            {"name": "Sol b"},
            {"name": "Si b"},
            {"name": "Ré b"},
            {"name": "Mi"}
          ]
        },
        {
          "name": "Sol♭m 7",
          "keys": [
            {"name": "Sol b"},
            {"name": "La"},
            {"name": "Ré b"},
            {"name": "Mi"}
          ]
        },
    
        
        {
          "name": "Sol",
          "keys": [
            {"name": "Sol"},
            {"name": "Si"},
            {"name": "Ré"}
          ]
        },
        {
          "name": "Solm",
          "keys": [
            {"name": "Sol"},
            {"name": "Si b"},
            {"name": "Ré"}
          ]
        },
        {
          "name": "Sol 7",
          "keys": [
            {"name": "Sol"},
            {"name": "Si"},
            {"name": "Ré"},
            {"name": "Fa"}
          ]
        },
        {
          "name": "Solm 7",
          "keys": [
            {"name": "Sol"},
            {"name": "Si b"},
            {"name": "Ré"},
            {"name": "Fa"}
          ]
        },
    
    
        {
          "name": "Sol#",
          "keys": [
            {"name": "Sol#"},
            {"name": "Do"},
            {"name": "Ré#"}
          ]
        },
        {
          "name": "Sol#m",
          "keys": [
            {"name": "Sol#"},
            {"name": "Si"},
            {"name": "Ré#"}
          ]
        },
        {
          "name": "Sol# 7",
          "keys": [
            {"name": "Sol#"},
            {"name": "Do"},
            {"name": "Ré#"},
            {"name": "Fa#"}
          ]
        },
        {
          "name": "Sol#m 7",
          "keys": [
            {"name": "Sol#"},
            {"name": "Si"},
            {"name": "Ré#"},
            {"name": "Fa#"}
          ]
        }
      ]
    },
    {
      "type": "La",
      "chords": [
        {
          "name": "La♭",
          "keys": [
            {"name": "La b"},
            {"name": "Do"},
            {"name": "Mi b"}
          ]
        },
        {
          "name": "La♭m",
          "keys": [
            {"name": "La b"},
            {"name": "Si"},
            {"name": "Mi b"}
          ]
        },
        {
          "name": "La♭ 7",
          "keys": [
            {"name": "La b"},
            {"name": "Do"},
            {"name": "Mi b"},
            {"name": "Sol b"}
          ]
        },
        {
          "name": "La♭m 7",
          "keys": [
            {"name": "La b"},
            {"name": "Si"},
            {"name": "Mi b"},
            {"name": "Sol b"}
          ]
        },
    
        {
          "name": "La",
          "keys": [
            {"name": "La"},
            {"name": "Do#"},
            {"name": "Mi"}
          ]
        },
        {
          "name": "Lam",
          "keys": [
            {"name": "La"},
            {"name": "Do"},
            {"name": "Mi"}
          ]
        },
        {
          "name": "La 7",
          "keys": [
            {"name": "La"},
            {"name": "Do#"},
            {"name": "Mi"},
            {"name": "Sol"}
          ]
        },
        {
          "name": "Lam 7",
          "keys": [
            {"name": "La"},
            {"name": "Do"},
            {"name": "Mi"},
            {"name": "Sol"}
          ]
        },
    
    
        {
          "name": "La#",
          "keys": [
            {"name": "La#"},
            {"name": "Ré"},
            {"name": "Fa"}
          ]
        },
        {
          "name": "La#m",
          "keys": [
            {"name": "La#"},
            {"name": "Do#"},
            {"name": "Fa"}
          ]
        },
        {
          "name": "La# 7",
          "keys": [
            {"name": "La#"},
            {"name": "Ré"},
            {"name": "Fa"},
            {"name": "Sol#"}
          ]
        },
        {
          "name": "La#m 7",
          "keys": [
            {"name": "La#"},
            {"name": "Do#"},
            {"name": "Fa"},
            {"name": "Sol#"}
          ]
        }
      ]
    },
    {
      "type": "Si",
      "chords": [
        {
          "name": "Si b",
          "keys": [
            {"name": "Si b"},
            {"name": "Ré"},
            {"name": "Fa"}
          ]
        },
        {
          "name": "Si bm",
          "keys": [
            {"name": "Si b"},
            {"name": "Ré b"},
            {"name": "Fa"}
          ]
        },
        {
          "name": "Si b 7",
          "keys": [
            {"name": "Si b"},
            {"name": "Ré"},
            {"name": "Fa"},
            {"name": "La b"}
          ]
        },
        {
          "name": "Si bm 7",
          "keys": [
            {"name": "Si b"},
            {"name": "Ré b"},
            {"name": "Fa"},
            {"name": "La b"}
          ]
        },
    
        {
          "name": "Si",
          "keys": [
            {"name": "Si"},
            {"name": "Ré#"},
            {"name": "Fa#"}
          ]
        },
        {
          "name": "Sim",
          "keys": [
            {"name": "Si"},
            {"name": "Ré"},
            {"name": "Fa#"}
          ]
        },
        {
          "name": "Si 7",
          "keys": [
            {"name": "Si"},
            {"name": "Ré#"},
            {"name": "Fa#"},
            {"name": "La"}
          ]
        },
        {
          "name": "Sim 7",
          "keys": [
            {"name": "Si"},
            {"name": "Ré"},
            {"name": "Fa#"},
            {"name": "La"}
          ]
        }
      ]
    }
  ]
}`);

export {pianoChords}