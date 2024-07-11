window.BENCHMARK_DATA = {
  "lastUpdate": 1720664284985,
  "repoUrl": "https://github.com/vbegin/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd1ab08d9600d01779b76528d731a57b41d67b3",
          "message": "feat: benchmark monitoring action (#1263)\n\n* feat: benchmark monitoring\r\n\r\n* fix: action gh-pages-branch\r\n\r\n* fix: change gh-pages-branch",
          "timestamp": "2023-06-15T21:34:23+08:00",
          "tree_id": "ccd939904f3ddedfe83574582cb14277d9a3e712",
          "url": "https://github.com/casbin/casbin/commit/9dd1ab08d9600d01779b76528d731a57b41d67b3"
        },
        "date": 1686836375252,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 25.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48314947 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 270.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4502481 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 272.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4270809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 282.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4256540 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 285.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4014076 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 263.6,
            "unit": "ns/op\t      97 B/op\t       3 allocs/op",
            "extra": "4083482 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 268.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4407315 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 285.7,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4323384 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 4558,
            "unit": "ns/op\t    1523 B/op\t      18 allocs/op",
            "extra": "254983 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 296.9,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "3886706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 270.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4358143 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 268.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4511676 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 270.1,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "4328011 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 808.8,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1496637 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 865.6,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1364461 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 952.7,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1272265 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 811.1,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1417356 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 1198,
            "unit": "ns/op\t     190 B/op\t       7 allocs/op",
            "extra": "839498 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 2084,
            "unit": "ns/op\t     455 B/op\t       9 allocs/op",
            "extra": "613252 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 835.8,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1420976 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 1037,
            "unit": "ns/op\t     179 B/op\t       7 allocs/op",
            "extra": "1152781 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 2275,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "653528 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 26.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48415063 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 5507,
            "unit": "ns/op\t    1491 B/op\t      17 allocs/op",
            "extra": "218856 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 8404,
            "unit": "ns/op\t    2037 B/op\t      35 allocs/op",
            "extra": "140521 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 77008,
            "unit": "ns/op\t   20004 B/op\t     480 allocs/op",
            "extra": "15350 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 875532,
            "unit": "ns/op\t  191414 B/op\t    4827 allocs/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 9712245,
            "unit": "ns/op\t 1899494 B/op\t   48170 allocs/op",
            "extra": "110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 92999,
            "unit": "ns/op\t   20108 B/op\t     615 allocs/op",
            "extra": "13064 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 899547,
            "unit": "ns/op\t  194116 B/op\t    6024 allocs/op",
            "extra": "1149 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 11037755,
            "unit": "ns/op\t 1954814 B/op\t   61189 allocs/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 7096,
            "unit": "ns/op\t    1823 B/op\t      27 allocs/op",
            "extra": "162196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 7674,
            "unit": "ns/op\t    1806 B/op\t      25 allocs/op",
            "extra": "154899 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 4322,
            "unit": "ns/op\t    1516 B/op\t      17 allocs/op",
            "extra": "277214 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5570683,
            "unit": "ns/op\t 1306100 B/op\t   40088 allocs/op",
            "extra": "200 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 9400,
            "unit": "ns/op\t    3026 B/op\t      37 allocs/op",
            "extra": "128631 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 10863,
            "unit": "ns/op\t    2449 B/op\t      49 allocs/op",
            "extra": "105994 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 6540,
            "unit": "ns/op\t    1742 B/op\t      22 allocs/op",
            "extra": "186477 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 35124,
            "unit": "ns/op\t   16613 B/op\t     164 allocs/op",
            "extra": "35221 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 127839,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "8962 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1306656,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "877 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 17330168,
            "unit": "ns/op\t 1349922 B/op\t   89741 allocs/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 9255566801,
            "unit": "ns/op\t5287107600 B/op\t60931003 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 260180145,
            "unit": "ns/op\t139577964 B/op\t 1670247 allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 9703364723,
            "unit": "ns/op\t5424673600 B/op\t62541575 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 16234,
            "unit": "ns/op\t    7538 B/op\t     111 allocs/op",
            "extra": "74847 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 843.5,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1399729 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 16193,
            "unit": "ns/op\t    7541 B/op\t     111 allocs/op",
            "extra": "77476 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f18f44a619c1045258d3d980348027e3107082d",
          "message": "ci: change CI benchmark alert threshold (#1266)",
          "timestamp": "2023-06-17T00:18:17+08:00",
          "tree_id": "2c8a631c329bf5edbfb83b9e2cb12f1b4352b5e7",
          "url": "https://github.com/casbin/casbin/commit/4f18f44a619c1045258d3d980348027e3107082d"
        },
        "date": 1686932557412,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57444519 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 208.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5718826 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 207.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5740225 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 226.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5259009 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 222.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5229240 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 204.9,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5382606 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 215.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5523656 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 233,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4998908 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3674,
            "unit": "ns/op\t    1519 B/op\t      18 allocs/op",
            "extra": "307078 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 237,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5045019 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 208.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5727698 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 210.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5693319 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 201.6,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5262932 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 653.1,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1854058 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 684.6,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1764549 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 703.5,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1712857 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 651.8,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1778103 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 820.2,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1432188 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1494,
            "unit": "ns/op\t     459 B/op\t       9 allocs/op",
            "extra": "944884 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 665.2,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1777087 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 779.1,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1388252 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1583,
            "unit": "ns/op\t     293 B/op\t      13 allocs/op",
            "extra": "752514 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57419490 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4746,
            "unit": "ns/op\t    1488 B/op\t      17 allocs/op",
            "extra": "246157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7155,
            "unit": "ns/op\t    2034 B/op\t      35 allocs/op",
            "extra": "163630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 62094,
            "unit": "ns/op\t   19964 B/op\t     480 allocs/op",
            "extra": "19478 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 645213,
            "unit": "ns/op\t  191227 B/op\t    4827 allocs/op",
            "extra": "1831 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7078603,
            "unit": "ns/op\t 1899238 B/op\t   48175 allocs/op",
            "extra": "170 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 75295,
            "unit": "ns/op\t   20053 B/op\t     615 allocs/op",
            "extra": "16150 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 715653,
            "unit": "ns/op\t  194332 B/op\t    6023 allocs/op",
            "extra": "1413 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8093452,
            "unit": "ns/op\t 1945018 B/op\t   60803 allocs/op",
            "extra": "140 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5887,
            "unit": "ns/op\t    1820 B/op\t      27 allocs/op",
            "extra": "195484 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6558,
            "unit": "ns/op\t    1803 B/op\t      25 allocs/op",
            "extra": "180169 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3614,
            "unit": "ns/op\t    1511 B/op\t      17 allocs/op",
            "extra": "315313 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5153754,
            "unit": "ns/op\t 1302518 B/op\t   40088 allocs/op",
            "extra": "231 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7663,
            "unit": "ns/op\t    3018 B/op\t      37 allocs/op",
            "extra": "154326 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 8959,
            "unit": "ns/op\t    2441 B/op\t      49 allocs/op",
            "extra": "132133 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5405,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "219210 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 27940,
            "unit": "ns/op\t   16596 B/op\t     164 allocs/op",
            "extra": "42956 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 100748,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1056333,
            "unit": "ns/op\t  125907 B/op\t    8741 allocs/op",
            "extra": "1070 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 11741690,
            "unit": "ns/op\t 1349914 B/op\t   89741 allocs/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7222853799,
            "unit": "ns/op\t5284878896 B/op\t60929448 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 199841725,
            "unit": "ns/op\t139516489 B/op\t 1670216 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7444518276,
            "unit": "ns/op\t5421875096 B/op\t62539860 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12753,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "94293 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 697.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1727203 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 12825,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "93298 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peymanmortazavi@users.noreply.github.com",
            "name": "Peyman Mortazavi",
            "username": "peymanmortazavi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8353eda2716fb0038c5324f3cb7a41e51f36ee0c",
          "message": "fix: add EnforceContext' GetCacheKey() (#1265)\n\n* allow enforce context to get cached\r\n\r\n* add tests\r\n\r\n* Update enforcer_cached.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-06-17T22:31:53+08:00",
          "tree_id": "e865f6b93eafc3c706bd611174ae3ec2a9a16aeb",
          "url": "https://github.com/casbin/casbin/commit/8353eda2716fb0038c5324f3cb7a41e51f36ee0c"
        },
        "date": 1687012573799,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57207981 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5670244 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 204.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5816884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 219.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5441822 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 226.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5163327 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 211.8,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "4797204 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 204.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5501299 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 227.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5215113 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3704,
            "unit": "ns/op\t    1524 B/op\t      18 allocs/op",
            "extra": "311671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 232,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5151146 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 205.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5839311 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 218.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5840869 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 393,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "3052272 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 203.8,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5154950 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 641.9,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1852093 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 681.9,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1777251 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 720.1,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1674834 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 665.7,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1799802 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 840.1,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1409118 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1581,
            "unit": "ns/op\t     457 B/op\t       9 allocs/op",
            "extra": "951526 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 672.7,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1794343 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 774.3,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1425872 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1709,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55990222 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4762,
            "unit": "ns/op\t    1490 B/op\t      17 allocs/op",
            "extra": "248553 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7153,
            "unit": "ns/op\t    2036 B/op\t      35 allocs/op",
            "extra": "163948 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63261,
            "unit": "ns/op\t   19954 B/op\t     480 allocs/op",
            "extra": "19038 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 646575,
            "unit": "ns/op\t  191316 B/op\t    4828 allocs/op",
            "extra": "1838 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7263928,
            "unit": "ns/op\t 1895217 B/op\t   48057 allocs/op",
            "extra": "163 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 77648,
            "unit": "ns/op\t   20049 B/op\t     615 allocs/op",
            "extra": "15358 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 746223,
            "unit": "ns/op\t  194381 B/op\t    6023 allocs/op",
            "extra": "1422 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8042693,
            "unit": "ns/op\t 1945786 B/op\t   60832 allocs/op",
            "extra": "135 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5968,
            "unit": "ns/op\t    1819 B/op\t      27 allocs/op",
            "extra": "189163 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6638,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "179216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3708,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "321110 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5053302,
            "unit": "ns/op\t 1302992 B/op\t   40088 allocs/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7708,
            "unit": "ns/op\t    3020 B/op\t      37 allocs/op",
            "extra": "152252 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9132,
            "unit": "ns/op\t    2442 B/op\t      49 allocs/op",
            "extra": "131775 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5446,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "216006 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 28808,
            "unit": "ns/op\t   16595 B/op\t     164 allocs/op",
            "extra": "41857 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 101996,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1052563,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12560794,
            "unit": "ns/op\t 1349920 B/op\t   89741 allocs/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7325599901,
            "unit": "ns/op\t5285105568 B/op\t60930356 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 205072186,
            "unit": "ns/op\t139515816 B/op\t 1670232 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7663870692,
            "unit": "ns/op\t5422105016 B/op\t62540746 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12870,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "92415 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 705.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1723117 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13018,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "91410 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "YunShuEmail@foxmail.com",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12c6c5f67f6b0ed2894e963dc690d95c31e93aaf",
          "message": "docs: replace gitter links with discord (#1271)",
          "timestamp": "2023-07-08T23:17:39+08:00",
          "tree_id": "0fb04e043421294ba6bb55e4875c65fb2f2fb5f5",
          "url": "https://github.com/casbin/casbin/commit/12c6c5f67f6b0ed2894e963dc690d95c31e93aaf"
        },
        "date": 1688829752553,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 23.14,
            "unit": "ns/op",
            "extra": "49812490 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49812490 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49812490 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 250.3,
            "unit": "ns/op",
            "extra": "4730142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4730142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4730142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 246.8,
            "unit": "ns/op",
            "extra": "4723628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4723628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4723628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 255.6,
            "unit": "ns/op",
            "extra": "4669111 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4669111 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4669111 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 276.4,
            "unit": "ns/op",
            "extra": "4183668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4183668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4183668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 237.2,
            "unit": "ns/op",
            "extra": "4734512 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "4734512 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4734512 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 241,
            "unit": "ns/op",
            "extra": "4463216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4463216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4463216 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 244,
            "unit": "ns/op",
            "extra": "4851030 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4851030 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4851030 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3828,
            "unit": "ns/op",
            "extra": "296755 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "296755 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "296755 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 274.6,
            "unit": "ns/op",
            "extra": "4637661 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4637661 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4637661 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 242.8,
            "unit": "ns/op",
            "extra": "5133277 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5133277 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5133277 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 241.4,
            "unit": "ns/op",
            "extra": "4921710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4921710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4921710 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 454.7,
            "unit": "ns/op",
            "extra": "2587154 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2587154 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2587154 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 238.6,
            "unit": "ns/op",
            "extra": "4873293 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4873293 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4873293 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 719.8,
            "unit": "ns/op",
            "extra": "1510875 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1510875 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1510875 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 760.9,
            "unit": "ns/op",
            "extra": "1537899 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1537899 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1537899 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 909.9,
            "unit": "ns/op",
            "extra": "1307396 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1307396 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1307396 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 799.2,
            "unit": "ns/op",
            "extra": "1475134 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1475134 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1475134 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1163,
            "unit": "ns/op",
            "extra": "869464 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 189,
            "unit": "B/op",
            "extra": "869464 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "869464 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1753,
            "unit": "ns/op",
            "extra": "752296 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 412,
            "unit": "B/op",
            "extra": "752296 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "752296 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 794.7,
            "unit": "ns/op",
            "extra": "1485889 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1485889 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1485889 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 902.1,
            "unit": "ns/op",
            "extra": "1211677 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1211677 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1211677 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2244,
            "unit": "ns/op",
            "extra": "569224 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 300,
            "unit": "B/op",
            "extra": "569224 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "569224 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 23.21,
            "unit": "ns/op",
            "extra": "53289112 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53289112 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53289112 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5169,
            "unit": "ns/op",
            "extra": "222326 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "222326 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "222326 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7919,
            "unit": "ns/op",
            "extra": "142228 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "142228 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "142228 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 73346,
            "unit": "ns/op",
            "extra": "15664 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20019,
            "unit": "B/op",
            "extra": "15664 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15664 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 821796,
            "unit": "ns/op",
            "extra": "1470 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191379,
            "unit": "B/op",
            "extra": "1470 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1470 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9073220,
            "unit": "ns/op",
            "extra": "133 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1892845,
            "unit": "B/op",
            "extra": "133 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 47988,
            "unit": "allocs/op",
            "extra": "133 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 90526,
            "unit": "ns/op",
            "extra": "13276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20056,
            "unit": "B/op",
            "extra": "13276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "13276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 897233,
            "unit": "ns/op",
            "extra": "1188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194446,
            "unit": "B/op",
            "extra": "1188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10150629,
            "unit": "ns/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1950676,
            "unit": "B/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61027,
            "unit": "allocs/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6433,
            "unit": "ns/op",
            "extra": "173799 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "173799 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "173799 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7355,
            "unit": "ns/op",
            "extra": "163138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "163138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "163138 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4058,
            "unit": "ns/op",
            "extra": "286891 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1515,
            "unit": "B/op",
            "extra": "286891 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "286891 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5220412,
            "unit": "ns/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1306537,
            "unit": "B/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8511,
            "unit": "ns/op",
            "extra": "135156 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3023,
            "unit": "B/op",
            "extra": "135156 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "135156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10166,
            "unit": "ns/op",
            "extra": "116635 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2449,
            "unit": "B/op",
            "extra": "116635 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "116635 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5487,
            "unit": "ns/op",
            "extra": "221130 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "221130 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "221130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29535,
            "unit": "ns/op",
            "extra": "39410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16601,
            "unit": "B/op",
            "extra": "39410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "39410 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 111029,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1118943,
            "unit": "ns/op",
            "extra": "1045 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1045 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1045 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14342562,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349924,
            "unit": "B/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8565090218,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5295286480,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932434,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 235417660,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139748076,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670284,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8864323815,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422330008,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541098,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 15052,
            "unit": "ns/op",
            "extra": "79246 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "79246 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "79246 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 823.6,
            "unit": "ns/op",
            "extra": "1461580 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1461580 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1461580 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 14768,
            "unit": "ns/op",
            "extra": "79664 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7549,
            "unit": "B/op",
            "extra": "79664 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "79664 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25011e0be13281526856f2b8d1c8292a7444659a",
          "message": "feat: support json request for ABAC (#1277)\n\n* feat: support json request for ABAC\r\n\r\n* feat: acceptJsonRequest\r\n\r\n* refactor: refactor test & import",
          "timestamp": "2023-07-17T12:12:34+08:00",
          "tree_id": "b07620830deeb369247ef01b8cb94645b1dc16a4",
          "url": "https://github.com/casbin/casbin/commit/25011e0be13281526856f2b8d1c8292a7444659a"
        },
        "date": 1689567424041,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "57427610 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57427610 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57427610 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 210.9,
            "unit": "ns/op",
            "extra": "5714880 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5714880 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5714880 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 210,
            "unit": "ns/op",
            "extra": "5722236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5722236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5722236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 226.6,
            "unit": "ns/op",
            "extra": "5280800 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5280800 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5280800 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 227,
            "unit": "ns/op",
            "extra": "5340516 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5340516 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5340516 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 214.1,
            "unit": "ns/op",
            "extra": "5126336 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5126336 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5126336 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 211.7,
            "unit": "ns/op",
            "extra": "5652350 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5652350 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5652350 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 237.1,
            "unit": "ns/op",
            "extra": "5019668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5019668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5019668 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3889,
            "unit": "ns/op",
            "extra": "305840 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "305840 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "305840 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 247.6,
            "unit": "ns/op",
            "extra": "4978824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4978824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4978824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 224.7,
            "unit": "ns/op",
            "extra": "5619228 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5619228 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5619228 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 217.3,
            "unit": "ns/op",
            "extra": "5539640 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5539640 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5539640 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 404.1,
            "unit": "ns/op",
            "extra": "2954520 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2954520 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2954520 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 210.2,
            "unit": "ns/op",
            "extra": "5856218 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5856218 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5856218 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 644,
            "unit": "ns/op",
            "extra": "1879797 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1879797 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1879797 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 683.6,
            "unit": "ns/op",
            "extra": "1664949 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1664949 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1664949 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 720.8,
            "unit": "ns/op",
            "extra": "1649752 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1649752 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1649752 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 665.7,
            "unit": "ns/op",
            "extra": "1750266 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1750266 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1750266 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 829.1,
            "unit": "ns/op",
            "extra": "1434310 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1434310 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1434310 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1524,
            "unit": "ns/op",
            "extra": "952407 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 457,
            "unit": "B/op",
            "extra": "952407 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "952407 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 690.6,
            "unit": "ns/op",
            "extra": "1690765 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1690765 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1690765 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 763.3,
            "unit": "ns/op",
            "extra": "1454816 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1454816 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1454816 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1665,
            "unit": "ns/op",
            "extra": "844027 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 287,
            "unit": "B/op",
            "extra": "844027 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "844027 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57395200 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57395200 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57395200 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4752,
            "unit": "ns/op",
            "extra": "240946 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "240946 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "240946 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7239,
            "unit": "ns/op",
            "extra": "167106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "167106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "167106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 64127,
            "unit": "ns/op",
            "extra": "18403 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19955,
            "unit": "B/op",
            "extra": "18403 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18403 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 646649,
            "unit": "ns/op",
            "extra": "1833 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191249,
            "unit": "B/op",
            "extra": "1833 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1833 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7535517,
            "unit": "ns/op",
            "extra": "157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901446,
            "unit": "B/op",
            "extra": "157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48229,
            "unit": "allocs/op",
            "extra": "157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 76514,
            "unit": "ns/op",
            "extra": "15565 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20049,
            "unit": "B/op",
            "extra": "15565 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15565 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 737731,
            "unit": "ns/op",
            "extra": "1435 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194399,
            "unit": "B/op",
            "extra": "1435 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1435 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8543339,
            "unit": "ns/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1947080,
            "unit": "B/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60884,
            "unit": "allocs/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5986,
            "unit": "ns/op",
            "extra": "193370 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "193370 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "193370 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6623,
            "unit": "ns/op",
            "extra": "178806 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "178806 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "178806 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3727,
            "unit": "ns/op",
            "extra": "319942 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1511,
            "unit": "B/op",
            "extra": "319942 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "319942 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5138942,
            "unit": "ns/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303790,
            "unit": "B/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7955,
            "unit": "ns/op",
            "extra": "149629 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3021,
            "unit": "B/op",
            "extra": "149629 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "149629 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9217,
            "unit": "ns/op",
            "extra": "128348 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "128348 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "128348 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5486,
            "unit": "ns/op",
            "extra": "216120 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "216120 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "216120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29776,
            "unit": "ns/op",
            "extra": "40356 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16608,
            "unit": "B/op",
            "extra": "40356 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "40356 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 104542,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1077990,
            "unit": "ns/op",
            "extra": "1030 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1030 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1030 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 13296752,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349919,
            "unit": "B/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7546230623,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285620520,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930738,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 207452963,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139539172,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670243,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7728443257,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422743952,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541253,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13222,
            "unit": "ns/op",
            "extra": "90870 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "90870 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "90870 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 720.3,
            "unit": "ns/op",
            "extra": "1667301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1667301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1667301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 12809,
            "unit": "ns/op",
            "extra": "91759 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "91759 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "91759 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18f37ae11d3a95467edaa72799de3cbe85e82667",
          "message": "fix: Preprocess the access to the request object in the policy (#1279)",
          "timestamp": "2023-07-17T23:02:53+08:00",
          "tree_id": "47ce318e56722a75c49f3b0f8adcd58596bb0758",
          "url": "https://github.com/casbin/casbin/commit/18f37ae11d3a95467edaa72799de3cbe85e82667"
        },
        "date": 1689606472389,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.68,
            "unit": "ns/op",
            "extra": "57721780 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57721780 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57721780 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 232.3,
            "unit": "ns/op",
            "extra": "4974478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4974478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4974478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 233.5,
            "unit": "ns/op",
            "extra": "5211920 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5211920 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5211920 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 234.6,
            "unit": "ns/op",
            "extra": "4974819 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4974819 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4974819 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 257.2,
            "unit": "ns/op",
            "extra": "4579550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4579550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4579550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 230.1,
            "unit": "ns/op",
            "extra": "5200146 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5200146 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5200146 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 243,
            "unit": "ns/op",
            "extra": "4753184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4753184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4753184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 252.1,
            "unit": "ns/op",
            "extra": "4832019 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4832019 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4832019 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3915,
            "unit": "ns/op",
            "extra": "303552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "303552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "303552 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 257.6,
            "unit": "ns/op",
            "extra": "4576740 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4576740 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4576740 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 248.2,
            "unit": "ns/op",
            "extra": "4883155 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4883155 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4883155 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 246.6,
            "unit": "ns/op",
            "extra": "4837224 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4837224 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4837224 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 458.7,
            "unit": "ns/op",
            "extra": "2644704 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2644704 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2644704 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 222.2,
            "unit": "ns/op",
            "extra": "4789239 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4789239 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4789239 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 712.6,
            "unit": "ns/op",
            "extra": "1729632 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1729632 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1729632 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 728.6,
            "unit": "ns/op",
            "extra": "1585681 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1585681 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1585681 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 824,
            "unit": "ns/op",
            "extra": "1430766 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1430766 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1430766 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 736.8,
            "unit": "ns/op",
            "extra": "1681278 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1681278 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1681278 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1092,
            "unit": "ns/op",
            "extra": "1097961 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 183,
            "unit": "B/op",
            "extra": "1097961 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1097961 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1640,
            "unit": "ns/op",
            "extra": "805710 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 428,
            "unit": "B/op",
            "extra": "805710 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "805710 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 774.2,
            "unit": "ns/op",
            "extra": "1546034 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1546034 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1546034 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 855.3,
            "unit": "ns/op",
            "extra": "1300570 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1300570 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1300570 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1693,
            "unit": "ns/op",
            "extra": "798812 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 286,
            "unit": "B/op",
            "extra": "798812 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "798812 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.79,
            "unit": "ns/op",
            "extra": "58064461 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58064461 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58064461 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4859,
            "unit": "ns/op",
            "extra": "250071 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "250071 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "250071 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7529,
            "unit": "ns/op",
            "extra": "163898 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2039,
            "unit": "B/op",
            "extra": "163898 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "163898 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 68295,
            "unit": "ns/op",
            "extra": "17521 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19953,
            "unit": "B/op",
            "extra": "17521 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "17521 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 840913,
            "unit": "ns/op",
            "extra": "1441 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191372,
            "unit": "B/op",
            "extra": "1441 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1441 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9831044,
            "unit": "ns/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903188,
            "unit": "B/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48274,
            "unit": "allocs/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 80128,
            "unit": "ns/op",
            "extra": "14719 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20095,
            "unit": "B/op",
            "extra": "14719 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14719 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 767833,
            "unit": "ns/op",
            "extra": "1389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194234,
            "unit": "B/op",
            "extra": "1389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 9482976,
            "unit": "ns/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1948182,
            "unit": "B/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60927,
            "unit": "allocs/op",
            "extra": "121 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6191,
            "unit": "ns/op",
            "extra": "176070 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "176070 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "176070 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6761,
            "unit": "ns/op",
            "extra": "182208 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1807,
            "unit": "B/op",
            "extra": "182208 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "182208 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3705,
            "unit": "ns/op",
            "extra": "322921 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1515,
            "unit": "B/op",
            "extra": "322921 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "322921 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 4951313,
            "unit": "ns/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1305613,
            "unit": "B/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "240 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7943,
            "unit": "ns/op",
            "extra": "137534 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3027,
            "unit": "B/op",
            "extra": "137534 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "137534 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9577,
            "unit": "ns/op",
            "extra": "125595 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2448,
            "unit": "B/op",
            "extra": "125595 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "125595 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5497,
            "unit": "ns/op",
            "extra": "209097 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1740,
            "unit": "B/op",
            "extra": "209097 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "209097 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 32144,
            "unit": "ns/op",
            "extra": "37923 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16618,
            "unit": "B/op",
            "extra": "37923 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "37923 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 107531,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1131397,
            "unit": "ns/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 16046113,
            "unit": "ns/op",
            "extra": "74 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "74 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "74 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8676248404,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286035008,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60931010,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 234686311,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139575657,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670246,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8997878438,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423956184,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541557,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 14166,
            "unit": "ns/op",
            "extra": "81301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "81301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "81301 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 737.4,
            "unit": "ns/op",
            "extra": "1615222 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1615222 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1615222 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15063,
            "unit": "ns/op",
            "extra": "81588 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "81588 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "81588 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8595764@qq.com",
            "name": "Charles",
            "username": "zcyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "108943a73e2b4c389aa5129e2331e7e1a5e542e8",
          "message": "feat: add AddPermissionsForUser function for SyncedEnforcer struct (#1285)",
          "timestamp": "2023-07-28T17:58:58+08:00",
          "tree_id": "1d1c9f388ecceb5dd91f2354d8ea4b285858c663",
          "url": "https://github.com/casbin/casbin/commit/108943a73e2b4c389aa5129e2331e7e1a5e542e8"
        },
        "date": 1690538651553,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 25.07,
            "unit": "ns/op",
            "extra": "48440974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48440974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48440974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 282.8,
            "unit": "ns/op",
            "extra": "4246128 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4246128 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4246128 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 278.8,
            "unit": "ns/op",
            "extra": "4309996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4309996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4309996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 293.1,
            "unit": "ns/op",
            "extra": "4245848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4245848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4245848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 297.9,
            "unit": "ns/op",
            "extra": "3850844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3850844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3850844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 279.7,
            "unit": "ns/op",
            "extra": "3682628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3682628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3682628 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 281.8,
            "unit": "ns/op",
            "extra": "4199199 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4199199 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4199199 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 324.8,
            "unit": "ns/op",
            "extra": "4043884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4043884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4043884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4355,
            "unit": "ns/op",
            "extra": "259530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "259530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "259530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 309.3,
            "unit": "ns/op",
            "extra": "3886399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3886399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3886399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 278.9,
            "unit": "ns/op",
            "extra": "4316996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4316996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4316996 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 277,
            "unit": "ns/op",
            "extra": "4310179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4310179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4310179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 536.3,
            "unit": "ns/op",
            "extra": "2251351 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2251351 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2251351 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 265.9,
            "unit": "ns/op",
            "extra": "3767038 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "3767038 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3767038 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 864.7,
            "unit": "ns/op",
            "extra": "1444284 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1444284 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1444284 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 918,
            "unit": "ns/op",
            "extra": "1329135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1329135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1329135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 973.1,
            "unit": "ns/op",
            "extra": "1229710 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1229710 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1229710 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 872.5,
            "unit": "ns/op",
            "extra": "1366063 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1366063 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1366063 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1201,
            "unit": "ns/op",
            "extra": "1012461 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 185,
            "unit": "B/op",
            "extra": "1012461 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1012461 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1896,
            "unit": "ns/op",
            "extra": "727869 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 418,
            "unit": "B/op",
            "extra": "727869 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "727869 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 894.8,
            "unit": "ns/op",
            "extra": "1330693 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1330693 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1330693 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1052,
            "unit": "ns/op",
            "extra": "1057128 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1057128 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1057128 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1987,
            "unit": "ns/op",
            "extra": "771999 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 288,
            "unit": "B/op",
            "extra": "771999 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "771999 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.71,
            "unit": "ns/op",
            "extra": "48475116 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48475116 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48475116 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5613,
            "unit": "ns/op",
            "extra": "201918 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "201918 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "201918 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8596,
            "unit": "ns/op",
            "extra": "140890 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2033,
            "unit": "B/op",
            "extra": "140890 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "140890 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 76882,
            "unit": "ns/op",
            "extra": "15646 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20020,
            "unit": "B/op",
            "extra": "15646 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15646 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 1003022,
            "unit": "ns/op",
            "extra": "1250 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191525,
            "unit": "B/op",
            "extra": "1250 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "1250 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10005156,
            "unit": "ns/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1893155,
            "unit": "B/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48003,
            "unit": "allocs/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 93776,
            "unit": "ns/op",
            "extra": "12501 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20034,
            "unit": "B/op",
            "extra": "12501 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12501 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 937533,
            "unit": "ns/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194196,
            "unit": "B/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 12072173,
            "unit": "ns/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1956301,
            "unit": "B/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61269,
            "unit": "allocs/op",
            "extra": "88 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7209,
            "unit": "ns/op",
            "extra": "161976 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "161976 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "161976 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8031,
            "unit": "ns/op",
            "extra": "144589 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1804,
            "unit": "B/op",
            "extra": "144589 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "144589 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4495,
            "unit": "ns/op",
            "extra": "267403 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1513,
            "unit": "B/op",
            "extra": "267403 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "267403 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5517666,
            "unit": "ns/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303009,
            "unit": "B/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "216 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9269,
            "unit": "ns/op",
            "extra": "128373 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3024,
            "unit": "B/op",
            "extra": "128373 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "128373 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11070,
            "unit": "ns/op",
            "extra": "102979 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "102979 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "102979 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6594,
            "unit": "ns/op",
            "extra": "186477 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "186477 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "186477 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 35157,
            "unit": "ns/op",
            "extra": "32868 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16629,
            "unit": "B/op",
            "extra": "32868 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "32868 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 130057,
            "unit": "ns/op",
            "extra": "8576 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8576 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8576 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1322268,
            "unit": "ns/op",
            "extra": "871 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "871 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "871 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 17156537,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349929,
            "unit": "B/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9259170790,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5297065384,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932975,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 256423947,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139522066,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670240,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9843323063,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422225344,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541355,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16228,
            "unit": "ns/op",
            "extra": "71554 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "71554 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "71554 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 881.8,
            "unit": "ns/op",
            "extra": "1354026 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1354026 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1354026 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16677,
            "unit": "ns/op",
            "extra": "73082 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "73082 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "73082 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "im@yunshu.site",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb80c24a8a9ad6cc08508b4fbc93fac8caf42f30",
          "message": "fix: fix broken links (#1290)",
          "timestamp": "2023-08-08T13:14:35+08:00",
          "tree_id": "4776b9b092cd4ee51d79f675d3a12f327b945202",
          "url": "https://github.com/casbin/casbin/commit/cb80c24a8a9ad6cc08508b4fbc93fac8caf42f30"
        },
        "date": 1691471944816,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "57265358 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57265358 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57265358 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 207.8,
            "unit": "ns/op",
            "extra": "5798270 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5798270 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5798270 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 210,
            "unit": "ns/op",
            "extra": "5753320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5753320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5753320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 229.9,
            "unit": "ns/op",
            "extra": "5152390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5152390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5152390 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 227.7,
            "unit": "ns/op",
            "extra": "5121320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5121320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5121320 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 203.1,
            "unit": "ns/op",
            "extra": "5380368 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5380368 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5380368 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 209.1,
            "unit": "ns/op",
            "extra": "5715129 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5715129 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5715129 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 234.5,
            "unit": "ns/op",
            "extra": "5203738 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5203738 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5203738 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3818,
            "unit": "ns/op",
            "extra": "311200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "311200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "311200 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 236.7,
            "unit": "ns/op",
            "extra": "5071978 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5071978 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5071978 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 207.4,
            "unit": "ns/op",
            "extra": "5753700 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5753700 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5753700 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 222.1,
            "unit": "ns/op",
            "extra": "5624252 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5624252 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5624252 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 423.9,
            "unit": "ns/op",
            "extra": "2832076 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2832076 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2832076 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 211.2,
            "unit": "ns/op",
            "extra": "5018181 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5018181 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5018181 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 653.8,
            "unit": "ns/op",
            "extra": "1831135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1831135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1831135 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 706.2,
            "unit": "ns/op",
            "extra": "1730594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1730594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1730594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 712.2,
            "unit": "ns/op",
            "extra": "1657116 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1657116 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1657116 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 674.2,
            "unit": "ns/op",
            "extra": "1756080 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1756080 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1756080 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 882.1,
            "unit": "ns/op",
            "extra": "1349390 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1349390 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1349390 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1594,
            "unit": "ns/op",
            "extra": "939883 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 460,
            "unit": "B/op",
            "extra": "939883 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "939883 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 672.8,
            "unit": "ns/op",
            "extra": "1814755 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1814755 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1814755 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 792.1,
            "unit": "ns/op",
            "extra": "1489429 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1489429 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1489429 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1774,
            "unit": "ns/op",
            "extra": "765562 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 301,
            "unit": "B/op",
            "extra": "765562 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "765562 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57426582 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57426582 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57426582 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4753,
            "unit": "ns/op",
            "extra": "242866 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1492,
            "unit": "B/op",
            "extra": "242866 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "242866 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7136,
            "unit": "ns/op",
            "extra": "167239 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2040,
            "unit": "B/op",
            "extra": "167239 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "167239 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 63075,
            "unit": "ns/op",
            "extra": "19278 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20032,
            "unit": "B/op",
            "extra": "19278 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19278 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 648786,
            "unit": "ns/op",
            "extra": "1870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191374,
            "unit": "B/op",
            "extra": "1870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7544956,
            "unit": "ns/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901991,
            "unit": "B/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48244,
            "unit": "allocs/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 76665,
            "unit": "ns/op",
            "extra": "15802 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20067,
            "unit": "B/op",
            "extra": "15802 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15802 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 749998,
            "unit": "ns/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194306,
            "unit": "B/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1482 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8260037,
            "unit": "ns/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946570,
            "unit": "B/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60864,
            "unit": "allocs/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5932,
            "unit": "ns/op",
            "extra": "191112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1826,
            "unit": "B/op",
            "extra": "191112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "191112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6739,
            "unit": "ns/op",
            "extra": "177214 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1808,
            "unit": "B/op",
            "extra": "177214 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "177214 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3762,
            "unit": "ns/op",
            "extra": "320548 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1518,
            "unit": "B/op",
            "extra": "320548 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "320548 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5237036,
            "unit": "ns/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1308719,
            "unit": "B/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40089,
            "unit": "allocs/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7818,
            "unit": "ns/op",
            "extra": "151453 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3033,
            "unit": "B/op",
            "extra": "151453 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "151453 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9083,
            "unit": "ns/op",
            "extra": "129248 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2455,
            "unit": "B/op",
            "extra": "129248 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "129248 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5564,
            "unit": "ns/op",
            "extra": "215908 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1746,
            "unit": "B/op",
            "extra": "215908 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "215908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29510,
            "unit": "ns/op",
            "extra": "41781 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16609,
            "unit": "B/op",
            "extra": "41781 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "41781 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 104814,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1101433,
            "unit": "ns/op",
            "extra": "1069 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1069 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1069 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14010177,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349916,
            "unit": "B/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7602375134,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5301809968,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60934042,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 207967278,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140119790,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670354,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7809108145,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5439594016,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62544619,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13111,
            "unit": "ns/op",
            "extra": "92928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7553,
            "unit": "B/op",
            "extra": "92928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92928 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 717.6,
            "unit": "ns/op",
            "extra": "1652106 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1652106 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1652106 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13185,
            "unit": "ns/op",
            "extra": "91723 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7549,
            "unit": "B/op",
            "extra": "91723 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "91723 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "hsluoyz",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d4621f72a66cb3ed2cb377a5646b282843c311c",
          "message": "Update README.md",
          "timestamp": "2023-08-08T14:27:40+08:00",
          "tree_id": "1d1c9f388ecceb5dd91f2354d8ea4b285858c663",
          "url": "https://github.com/casbin/casbin/commit/8d4621f72a66cb3ed2cb377a5646b282843c311c"
        },
        "date": 1691476394710,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.85,
            "unit": "ns/op",
            "extra": "48393357 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48393357 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48393357 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 291,
            "unit": "ns/op",
            "extra": "4068632 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4068632 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4068632 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 295,
            "unit": "ns/op",
            "extra": "4054317 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4054317 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4054317 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 296.3,
            "unit": "ns/op",
            "extra": "4027119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4027119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4027119 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 315,
            "unit": "ns/op",
            "extra": "3834603 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3834603 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3834603 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 280.4,
            "unit": "ns/op",
            "extra": "3990531 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3990531 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3990531 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 298.4,
            "unit": "ns/op",
            "extra": "3656064 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3656064 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3656064 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 309.2,
            "unit": "ns/op",
            "extra": "3960844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3960844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3960844 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4701,
            "unit": "ns/op",
            "extra": "248306 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "248306 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "248306 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 318.9,
            "unit": "ns/op",
            "extra": "3755836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3755836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3755836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 285.6,
            "unit": "ns/op",
            "extra": "4155962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4155962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4155962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 289.9,
            "unit": "ns/op",
            "extra": "4241148 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4241148 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4241148 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 564.1,
            "unit": "ns/op",
            "extra": "2118546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2118546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2118546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 293.5,
            "unit": "ns/op",
            "extra": "3893659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "3893659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3893659 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 869.8,
            "unit": "ns/op",
            "extra": "1355454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1355454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1355454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 943.1,
            "unit": "ns/op",
            "extra": "1287111 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1287111 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1287111 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 1021,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 915.1,
            "unit": "ns/op",
            "extra": "1284963 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1284963 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1284963 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1323,
            "unit": "ns/op",
            "extra": "900433 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "900433 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "900433 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2007,
            "unit": "ns/op",
            "extra": "667867 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 435,
            "unit": "B/op",
            "extra": "667867 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "667867 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 923.5,
            "unit": "ns/op",
            "extra": "1287194 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1287194 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1287194 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1123,
            "unit": "ns/op",
            "extra": "1090808 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1090808 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1090808 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2196,
            "unit": "ns/op",
            "extra": "572601 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "572601 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "572601 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.7,
            "unit": "ns/op",
            "extra": "46097456 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46097456 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46097456 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 6078,
            "unit": "ns/op",
            "extra": "194138 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "194138 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "194138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 9427,
            "unit": "ns/op",
            "extra": "123086 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "123086 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "123086 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 83730,
            "unit": "ns/op",
            "extra": "13854 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19964,
            "unit": "B/op",
            "extra": "13854 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "13854 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 1066963,
            "unit": "ns/op",
            "extra": "960 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191345,
            "unit": "B/op",
            "extra": "960 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "960 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 11237625,
            "unit": "ns/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903186,
            "unit": "B/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48274,
            "unit": "allocs/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 105126,
            "unit": "ns/op",
            "extra": "9840 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20086,
            "unit": "B/op",
            "extra": "9840 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "9840 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 1028157,
            "unit": "ns/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194238,
            "unit": "B/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11928008,
            "unit": "ns/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952993,
            "unit": "B/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61119,
            "unit": "allocs/op",
            "extra": "100 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7469,
            "unit": "ns/op",
            "extra": "151892 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "151892 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "151892 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8409,
            "unit": "ns/op",
            "extra": "142785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "142785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "142785 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4801,
            "unit": "ns/op",
            "extra": "241538 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1514,
            "unit": "B/op",
            "extra": "241538 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "241538 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 6601478,
            "unit": "ns/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304561,
            "unit": "B/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "193 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 10926,
            "unit": "ns/op",
            "extra": "111927 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3023,
            "unit": "B/op",
            "extra": "111927 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "111927 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11961,
            "unit": "ns/op",
            "extra": "99525 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "99525 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "99525 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 7236,
            "unit": "ns/op",
            "extra": "170016 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "170016 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "170016 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 38823,
            "unit": "ns/op",
            "extra": "28932 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16616,
            "unit": "B/op",
            "extra": "28932 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "28932 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 134365,
            "unit": "ns/op",
            "extra": "9224 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9224 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9224 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1375107,
            "unit": "ns/op",
            "extra": "896 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "896 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "896 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 18129924,
            "unit": "ns/op",
            "extra": "63 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "63 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "63 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 10859173769,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286584440,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60931303,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 290301510,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139533390,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670251,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10989708563,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423370800,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541764,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 17497,
            "unit": "ns/op",
            "extra": "69846 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "69846 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "69846 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 913.9,
            "unit": "ns/op",
            "extra": "1320553 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1320553 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1320553 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 18063,
            "unit": "ns/op",
            "extra": "68629 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7549,
            "unit": "B/op",
            "extra": "68629 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "68629 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "im@yunshu.site",
            "name": "YunShu",
            "username": "Selflocking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ffd73bebfb5202679dc39cf0eff568509f5902f",
          "message": "docs: update build badge (#1293)\n\n* docs: update build badge\r\n\r\n* Update default.yml\r\n\r\n* Update README.md\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-08-11T00:50:02+08:00",
          "tree_id": "d75829edc27d7c453f565d89b68248bbfddaaab1",
          "url": "https://github.com/casbin/casbin/commit/9ffd73bebfb5202679dc39cf0eff568509f5902f"
        },
        "date": 1691686469352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57361131 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57361131 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57361131 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 205.8,
            "unit": "ns/op",
            "extra": "5820591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5820591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5820591 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 205.5,
            "unit": "ns/op",
            "extra": "5850843 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5850843 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5850843 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 227,
            "unit": "ns/op",
            "extra": "5302191 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5302191 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5302191 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 228.2,
            "unit": "ns/op",
            "extra": "5086083 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5086083 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5086083 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 211.8,
            "unit": "ns/op",
            "extra": "5285251 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5285251 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5285251 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 205.6,
            "unit": "ns/op",
            "extra": "5745141 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5745141 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5745141 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 230,
            "unit": "ns/op",
            "extra": "5254968 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5254968 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5254968 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3805,
            "unit": "ns/op",
            "extra": "309208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "309208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "309208 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 235.3,
            "unit": "ns/op",
            "extra": "5082537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5082537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5082537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 206.4,
            "unit": "ns/op",
            "extra": "5844530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5844530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5844530 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 220.1,
            "unit": "ns/op",
            "extra": "5673086 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5673086 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5673086 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 418.5,
            "unit": "ns/op",
            "extra": "2857335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2857335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2857335 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 208.5,
            "unit": "ns/op",
            "extra": "5224384 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5224384 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5224384 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 646.2,
            "unit": "ns/op",
            "extra": "1857043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1857043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1857043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 708.2,
            "unit": "ns/op",
            "extra": "1715562 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1715562 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1715562 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 732.2,
            "unit": "ns/op",
            "extra": "1660807 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1660807 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1660807 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 677.2,
            "unit": "ns/op",
            "extra": "1791088 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1791088 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1791088 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 835.6,
            "unit": "ns/op",
            "extra": "1380296 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1380296 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1380296 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1424,
            "unit": "ns/op",
            "extra": "822024 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 424,
            "unit": "B/op",
            "extra": "822024 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "822024 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 678.7,
            "unit": "ns/op",
            "extra": "1784040 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1784040 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1784040 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 762.1,
            "unit": "ns/op",
            "extra": "1462100 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1462100 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1462100 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1784,
            "unit": "ns/op",
            "extra": "773484 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 298,
            "unit": "B/op",
            "extra": "773484 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "773484 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "57401442 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57401442 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57401442 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4800,
            "unit": "ns/op",
            "extra": "243760 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1492,
            "unit": "B/op",
            "extra": "243760 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "243760 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7188,
            "unit": "ns/op",
            "extra": "167811 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2039,
            "unit": "B/op",
            "extra": "167811 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "167811 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 63188,
            "unit": "ns/op",
            "extra": "19238 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19983,
            "unit": "B/op",
            "extra": "19238 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19238 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 654737,
            "unit": "ns/op",
            "extra": "1845 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191339,
            "unit": "B/op",
            "extra": "1845 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "1845 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7180052,
            "unit": "ns/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1893484,
            "unit": "B/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48009,
            "unit": "allocs/op",
            "extra": "165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 77213,
            "unit": "ns/op",
            "extra": "15542 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20065,
            "unit": "B/op",
            "extra": "15542 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15542 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 742615,
            "unit": "ns/op",
            "extra": "1473 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194179,
            "unit": "B/op",
            "extra": "1473 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1473 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8313041,
            "unit": "ns/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1945662,
            "unit": "B/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60838,
            "unit": "allocs/op",
            "extra": "134 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5968,
            "unit": "ns/op",
            "extra": "191349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "191349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "191349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6568,
            "unit": "ns/op",
            "extra": "179229 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "179229 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "179229 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3674,
            "unit": "ns/op",
            "extra": "313316 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1517,
            "unit": "B/op",
            "extra": "313316 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "313316 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5259440,
            "unit": "ns/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1306126,
            "unit": "B/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "230 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7689,
            "unit": "ns/op",
            "extra": "155014 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3027,
            "unit": "B/op",
            "extra": "155014 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "155014 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9114,
            "unit": "ns/op",
            "extra": "132489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2450,
            "unit": "B/op",
            "extra": "132489 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "132489 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5492,
            "unit": "ns/op",
            "extra": "217087 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1742,
            "unit": "B/op",
            "extra": "217087 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "217087 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 27357,
            "unit": "ns/op",
            "extra": "43119 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16596,
            "unit": "B/op",
            "extra": "43119 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "43119 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 103613,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1088128,
            "unit": "ns/op",
            "extra": "1059 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1059 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1059 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12586952,
            "unit": "ns/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349919,
            "unit": "B/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7381546511,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285339320,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930769,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 205861372,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139501702,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670236,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7841043777,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422713408,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541271,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13203,
            "unit": "ns/op",
            "extra": "93932 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "93932 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "93932 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 722.8,
            "unit": "ns/op",
            "extra": "1593373 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1593373 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1593373 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 12988,
            "unit": "ns/op",
            "extra": "89959 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "89959 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "89959 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "ae1a9341510d705722374e4e0961e94f931f9977",
          "message": "feat: add g rules to CasbinJsGetPermissionForUser()",
          "timestamp": "2023-08-14T18:59:57+08:00",
          "tree_id": "bab49b95d6bb014726053b5cdfcbf6956ac3bdb0",
          "url": "https://github.com/casbin/casbin/commit/ae1a9341510d705722374e4e0961e94f931f9977"
        },
        "date": 1692011123063,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.23,
            "unit": "ns/op",
            "extra": "48913569 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48913569 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48913569 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 273.2,
            "unit": "ns/op",
            "extra": "4231396 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4231396 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4231396 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 273.9,
            "unit": "ns/op",
            "extra": "4436415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4436415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4436415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 282.2,
            "unit": "ns/op",
            "extra": "4331460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4331460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4331460 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 289.5,
            "unit": "ns/op",
            "extra": "4071814 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4071814 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4071814 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 280.5,
            "unit": "ns/op",
            "extra": "4329177 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4329177 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4329177 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 281.5,
            "unit": "ns/op",
            "extra": "4257706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4257706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4257706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 300.6,
            "unit": "ns/op",
            "extra": "3992805 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3992805 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3992805 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4542,
            "unit": "ns/op",
            "extra": "274263 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "274263 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "274263 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 306.5,
            "unit": "ns/op",
            "extra": "3822099 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3822099 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3822099 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 281.1,
            "unit": "ns/op",
            "extra": "4332904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4332904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4332904 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 276.2,
            "unit": "ns/op",
            "extra": "4342533 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4342533 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4342533 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 532,
            "unit": "ns/op",
            "extra": "2257095 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2257095 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2257095 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 273.4,
            "unit": "ns/op",
            "extra": "4050808 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4050808 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4050808 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 831.2,
            "unit": "ns/op",
            "extra": "1409170 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1409170 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1409170 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 896.6,
            "unit": "ns/op",
            "extra": "1340976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1340976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1340976 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 942.3,
            "unit": "ns/op",
            "extra": "1257717 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1257717 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1257717 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 884.7,
            "unit": "ns/op",
            "extra": "1390148 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1390148 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1390148 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1161,
            "unit": "ns/op",
            "extra": "987459 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 186,
            "unit": "B/op",
            "extra": "987459 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "987459 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1852,
            "unit": "ns/op",
            "extra": "727034 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 418,
            "unit": "B/op",
            "extra": "727034 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "727034 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 853.5,
            "unit": "ns/op",
            "extra": "1339681 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1339681 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1339681 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1144489 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1144489 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1144489 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2020,
            "unit": "ns/op",
            "extra": "754708 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 290,
            "unit": "B/op",
            "extra": "754708 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "754708 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.51,
            "unit": "ns/op",
            "extra": "49497694 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49497694 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49497694 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5488,
            "unit": "ns/op",
            "extra": "208081 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1492,
            "unit": "B/op",
            "extra": "208081 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "208081 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8276,
            "unit": "ns/op",
            "extra": "142389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2040,
            "unit": "B/op",
            "extra": "142389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "142389 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 77009,
            "unit": "ns/op",
            "extra": "15783 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19985,
            "unit": "B/op",
            "extra": "15783 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15783 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 909939,
            "unit": "ns/op",
            "extra": "1333 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191522,
            "unit": "B/op",
            "extra": "1333 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4831,
            "unit": "allocs/op",
            "extra": "1333 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9746356,
            "unit": "ns/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1891930,
            "unit": "B/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 47960,
            "unit": "allocs/op",
            "extra": "116 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 91216,
            "unit": "ns/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20103,
            "unit": "B/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 924620,
            "unit": "ns/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194479,
            "unit": "B/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1184 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10912780,
            "unit": "ns/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1950028,
            "unit": "B/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61000,
            "unit": "allocs/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6986,
            "unit": "ns/op",
            "extra": "161467 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "161467 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "161467 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7641,
            "unit": "ns/op",
            "extra": "149520 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "149520 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "149520 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4297,
            "unit": "ns/op",
            "extra": "269265 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1516,
            "unit": "B/op",
            "extra": "269265 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "269265 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5552650,
            "unit": "ns/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1307248,
            "unit": "B/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40089,
            "unit": "allocs/op",
            "extra": "218 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9000,
            "unit": "ns/op",
            "extra": "135514 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3025,
            "unit": "B/op",
            "extra": "135514 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "135514 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10855,
            "unit": "ns/op",
            "extra": "104458 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2447,
            "unit": "B/op",
            "extra": "104458 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "104458 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6329,
            "unit": "ns/op",
            "extra": "187590 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "187590 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "187590 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 35177,
            "unit": "ns/op",
            "extra": "34362 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16610,
            "unit": "B/op",
            "extra": "34362 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "34362 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 127323,
            "unit": "ns/op",
            "extra": "8799 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8799 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8799 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1308503,
            "unit": "ns/op",
            "extra": "901 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "901 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "901 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 17691415,
            "unit": "ns/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "64 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9443835998,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285534360,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930847,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 268691258,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139493948,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670233,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10215424441,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422605120,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541230,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 15787,
            "unit": "ns/op",
            "extra": "72537 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7536,
            "unit": "B/op",
            "extra": "72537 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "72537 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 877.3,
            "unit": "ns/op",
            "extra": "1369513 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1369513 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1369513 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16073,
            "unit": "ns/op",
            "extra": "79995 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "79995 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "79995 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "abc2f81e5ba3d0ed51a49037b6b283b06cf8c8e0",
          "message": "Improve README",
          "timestamp": "2023-08-15T22:12:24+08:00",
          "tree_id": "14ac1b276f6977389cfd7d73f9c2766919a1d263",
          "url": "https://github.com/casbin/casbin/commit/abc2f81e5ba3d0ed51a49037b6b283b06cf8c8e0"
        },
        "date": 1692109022904,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "56973691 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56973691 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56973691 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 212.6,
            "unit": "ns/op",
            "extra": "5596180 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5596180 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5596180 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 215.6,
            "unit": "ns/op",
            "extra": "5453547 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5453547 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5453547 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 227.9,
            "unit": "ns/op",
            "extra": "5219972 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5219972 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5219972 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 230.8,
            "unit": "ns/op",
            "extra": "5179472 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5179472 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5179472 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 216.2,
            "unit": "ns/op",
            "extra": "5632671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5632671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5632671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 224.4,
            "unit": "ns/op",
            "extra": "5600550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5600550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5600550 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 241.7,
            "unit": "ns/op",
            "extra": "4940023 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4940023 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4940023 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3853,
            "unit": "ns/op",
            "extra": "302293 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "302293 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "302293 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 244.7,
            "unit": "ns/op",
            "extra": "4883455 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4883455 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4883455 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 216.3,
            "unit": "ns/op",
            "extra": "5566291 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5566291 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5566291 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 214.2,
            "unit": "ns/op",
            "extra": "5578424 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5578424 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5578424 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 430.5,
            "unit": "ns/op",
            "extra": "2658650 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2658650 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2658650 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 213.4,
            "unit": "ns/op",
            "extra": "5677761 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5677761 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5677761 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 648.7,
            "unit": "ns/op",
            "extra": "1774936 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1774936 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1774936 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 694.7,
            "unit": "ns/op",
            "extra": "1725794 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1725794 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1725794 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 738.7,
            "unit": "ns/op",
            "extra": "1661275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1661275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1661275 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 673.4,
            "unit": "ns/op",
            "extra": "1760098 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1760098 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1760098 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 885.6,
            "unit": "ns/op",
            "extra": "1385802 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1385802 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1385802 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1552,
            "unit": "ns/op",
            "extra": "879922 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 477,
            "unit": "B/op",
            "extra": "879922 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "879922 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 703.9,
            "unit": "ns/op",
            "extra": "1751178 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1751178 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1751178 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 821.6,
            "unit": "ns/op",
            "extra": "1343748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1343748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1343748 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1782,
            "unit": "ns/op",
            "extra": "735043 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 300,
            "unit": "B/op",
            "extra": "735043 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "735043 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57438888 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57438888 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57438888 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4815,
            "unit": "ns/op",
            "extra": "244672 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "244672 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "244672 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7193,
            "unit": "ns/op",
            "extra": "162751 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "162751 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "162751 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 62879,
            "unit": "ns/op",
            "extra": "17893 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20003,
            "unit": "B/op",
            "extra": "17893 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "17893 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 661711,
            "unit": "ns/op",
            "extra": "1804 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191319,
            "unit": "B/op",
            "extra": "1804 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1804 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7848469,
            "unit": "ns/op",
            "extra": "150 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1893539,
            "unit": "B/op",
            "extra": "150 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48009,
            "unit": "allocs/op",
            "extra": "150 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 77622,
            "unit": "ns/op",
            "extra": "15373 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20065,
            "unit": "B/op",
            "extra": "15373 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15373 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 763199,
            "unit": "ns/op",
            "extra": "1382 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194236,
            "unit": "B/op",
            "extra": "1382 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1382 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8679194,
            "unit": "ns/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946326,
            "unit": "B/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60864,
            "unit": "allocs/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6064,
            "unit": "ns/op",
            "extra": "184171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "184171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "184171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6763,
            "unit": "ns/op",
            "extra": "175657 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1804,
            "unit": "B/op",
            "extra": "175657 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "175657 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3744,
            "unit": "ns/op",
            "extra": "309812 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1513,
            "unit": "B/op",
            "extra": "309812 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "309812 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5257338,
            "unit": "ns/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1302282,
            "unit": "B/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7797,
            "unit": "ns/op",
            "extra": "151450 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "151450 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "151450 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9178,
            "unit": "ns/op",
            "extra": "129188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "129188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "129188 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5447,
            "unit": "ns/op",
            "extra": "216369 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1739,
            "unit": "B/op",
            "extra": "216369 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "216369 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28449,
            "unit": "ns/op",
            "extra": "42777 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16609,
            "unit": "B/op",
            "extra": "42777 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "42777 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 104089,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1091453,
            "unit": "ns/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12739666,
            "unit": "ns/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7493147678,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285458080,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930769,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 208832192,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139510256,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670243,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7946557145,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422339752,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541119,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13432,
            "unit": "ns/op",
            "extra": "87628 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7548,
            "unit": "B/op",
            "extra": "87628 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "87628 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 710.7,
            "unit": "ns/op",
            "extra": "1695078 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1695078 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1695078 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13232,
            "unit": "ns/op",
            "extra": "91040 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "91040 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "91040 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "0c44d27e47fd8afddffadf2c4ea95dcbb14d0e3b",
          "message": "Improve README",
          "timestamp": "2023-08-15T22:57:03+08:00",
          "tree_id": "75a15e218ddc322e4f42c02ee22cd4a4fd4989d0",
          "url": "https://github.com/casbin/casbin/commit/0c44d27e47fd8afddffadf2c4ea95dcbb14d0e3b"
        },
        "date": 1692111798088,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 25.08,
            "unit": "ns/op",
            "extra": "46950526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46950526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46950526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 282,
            "unit": "ns/op",
            "extra": "4114974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4114974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4114974 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 287.7,
            "unit": "ns/op",
            "extra": "4273993 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4273993 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4273993 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 301.1,
            "unit": "ns/op",
            "extra": "4033412 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4033412 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4033412 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 312.1,
            "unit": "ns/op",
            "extra": "3631178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3631178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3631178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 284.7,
            "unit": "ns/op",
            "extra": "3671445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3671445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3671445 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 287.7,
            "unit": "ns/op",
            "extra": "4238223 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4238223 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4238223 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 325.4,
            "unit": "ns/op",
            "extra": "3994264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3994264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3994264 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4425,
            "unit": "ns/op",
            "extra": "266425 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "266425 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "266425 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 318.1,
            "unit": "ns/op",
            "extra": "3713638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3713638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3713638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 284.8,
            "unit": "ns/op",
            "extra": "4115092 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4115092 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4115092 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 287.6,
            "unit": "ns/op",
            "extra": "4099222 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4099222 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4099222 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 563.3,
            "unit": "ns/op",
            "extra": "2256067 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2256067 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2256067 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 275.8,
            "unit": "ns/op",
            "extra": "4248740 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "4248740 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4248740 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 859,
            "unit": "ns/op",
            "extra": "1392560 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1392560 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1392560 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 941.7,
            "unit": "ns/op",
            "extra": "1319311 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1319311 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1319311 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 1042,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 895.9,
            "unit": "ns/op",
            "extra": "1329384 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1329384 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1329384 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1309,
            "unit": "ns/op",
            "extra": "954813 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 187,
            "unit": "B/op",
            "extra": "954813 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "954813 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2021,
            "unit": "ns/op",
            "extra": "621495 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 452,
            "unit": "B/op",
            "extra": "621495 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "621495 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 926.5,
            "unit": "ns/op",
            "extra": "1330299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1330299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1330299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1061,
            "unit": "ns/op",
            "extra": "1080002 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1080002 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1080002 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2599,
            "unit": "ns/op",
            "extra": "569398 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 308,
            "unit": "B/op",
            "extra": "569398 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "569398 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "46785038 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46785038 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46785038 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5819,
            "unit": "ns/op",
            "extra": "206409 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "206409 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "206409 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8979,
            "unit": "ns/op",
            "extra": "121526 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "121526 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "121526 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 83747,
            "unit": "ns/op",
            "extra": "13785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19977,
            "unit": "B/op",
            "extra": "13785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "13785 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 973903,
            "unit": "ns/op",
            "extra": "1190 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191172,
            "unit": "B/op",
            "extra": "1190 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1190 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10671807,
            "unit": "ns/op",
            "extra": "111 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903007,
            "unit": "B/op",
            "extra": "111 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48276,
            "unit": "allocs/op",
            "extra": "111 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 99440,
            "unit": "ns/op",
            "extra": "12222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20053,
            "unit": "B/op",
            "extra": "12222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12222 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 952476,
            "unit": "ns/op",
            "extra": "1101 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194232,
            "unit": "B/op",
            "extra": "1101 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6025,
            "unit": "allocs/op",
            "extra": "1101 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 12967818,
            "unit": "ns/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1953390,
            "unit": "B/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61152,
            "unit": "allocs/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7396,
            "unit": "ns/op",
            "extra": "153204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1819,
            "unit": "B/op",
            "extra": "153204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "153204 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8036,
            "unit": "ns/op",
            "extra": "147255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1804,
            "unit": "B/op",
            "extra": "147255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "147255 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4655,
            "unit": "ns/op",
            "extra": "245524 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "245524 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "245524 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 6029228,
            "unit": "ns/op",
            "extra": "202 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304081,
            "unit": "B/op",
            "extra": "202 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "202 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9301,
            "unit": "ns/op",
            "extra": "124035 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "124035 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "124035 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11169,
            "unit": "ns/op",
            "extra": "106026 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2442,
            "unit": "B/op",
            "extra": "106026 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "106026 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6848,
            "unit": "ns/op",
            "extra": "185952 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1740,
            "unit": "B/op",
            "extra": "185952 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "185952 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 40700,
            "unit": "ns/op",
            "extra": "29047 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16598,
            "unit": "B/op",
            "extra": "29047 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "29047 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 136453,
            "unit": "ns/op",
            "extra": "8503 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8503 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8503 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1428247,
            "unit": "ns/op",
            "extra": "796 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125910,
            "unit": "B/op",
            "extra": "796 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "796 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 18754548,
            "unit": "ns/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "62 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 10408511091,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286499400,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932021,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 279460349,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139527820,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670279,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 11185071429,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423728672,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62542560,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 17842,
            "unit": "ns/op",
            "extra": "67126 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7555,
            "unit": "B/op",
            "extra": "67126 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "67126 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 928.2,
            "unit": "ns/op",
            "extra": "1298592 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1298592 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1298592 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 17533,
            "unit": "ns/op",
            "extra": "68244 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7548,
            "unit": "B/op",
            "extra": "68244 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "68244 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c0c6033e344c606da7c9d8d1a78698d3b2bc159b",
          "message": "Improve README",
          "timestamp": "2023-08-15T23:26:23+08:00",
          "tree_id": "14ac1b276f6977389cfd7d73f9c2766919a1d263",
          "url": "https://github.com/casbin/casbin/commit/c0c6033e344c606da7c9d8d1a78698d3b2bc159b"
        },
        "date": 1692113468498,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "57340720 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57340720 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57340720 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 215.5,
            "unit": "ns/op",
            "extra": "5616836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5616836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5616836 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 216.9,
            "unit": "ns/op",
            "extra": "5498178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5498178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5498178 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 232,
            "unit": "ns/op",
            "extra": "5249290 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5249290 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5249290 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 227.2,
            "unit": "ns/op",
            "extra": "5241355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5241355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5241355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 216.5,
            "unit": "ns/op",
            "extra": "5416182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5416182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5416182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 214.6,
            "unit": "ns/op",
            "extra": "5624953 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5624953 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5624953 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 241.7,
            "unit": "ns/op",
            "extra": "4950123 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4950123 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4950123 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3810,
            "unit": "ns/op",
            "extra": "307070 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "307070 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "307070 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 236.8,
            "unit": "ns/op",
            "extra": "5078895 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5078895 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5078895 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 231,
            "unit": "ns/op",
            "extra": "5538734 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5538734 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5538734 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 209.6,
            "unit": "ns/op",
            "extra": "5617419 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5617419 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5617419 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 434.8,
            "unit": "ns/op",
            "extra": "2694565 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2694565 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2694565 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "5534275 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5534275 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5534275 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 689.1,
            "unit": "ns/op",
            "extra": "1725890 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1725890 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1725890 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 727.1,
            "unit": "ns/op",
            "extra": "1662022 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1662022 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1662022 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 739.5,
            "unit": "ns/op",
            "extra": "1616223 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1616223 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1616223 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 683,
            "unit": "ns/op",
            "extra": "1722874 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1722874 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1722874 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 919.9,
            "unit": "ns/op",
            "extra": "1251073 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 180,
            "unit": "B/op",
            "extra": "1251073 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1251073 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1520,
            "unit": "ns/op",
            "extra": "867610 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 414,
            "unit": "B/op",
            "extra": "867610 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "867610 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 697,
            "unit": "ns/op",
            "extra": "1687638 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1687638 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1687638 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 813.9,
            "unit": "ns/op",
            "extra": "1418136 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1418136 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1418136 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1783,
            "unit": "ns/op",
            "extra": "604518 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 300,
            "unit": "B/op",
            "extra": "604518 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "604518 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.97,
            "unit": "ns/op",
            "extra": "57237162 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57237162 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57237162 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4967,
            "unit": "ns/op",
            "extra": "229915 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "229915 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "229915 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7457,
            "unit": "ns/op",
            "extra": "158847 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "158847 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "158847 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 63702,
            "unit": "ns/op",
            "extra": "18349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19970,
            "unit": "B/op",
            "extra": "18349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18349 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 668211,
            "unit": "ns/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191264,
            "unit": "B/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1848 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 8050198,
            "unit": "ns/op",
            "extra": "144 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899389,
            "unit": "B/op",
            "extra": "144 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48171,
            "unit": "allocs/op",
            "extra": "144 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 77835,
            "unit": "ns/op",
            "extra": "14954 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20037,
            "unit": "B/op",
            "extra": "14954 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14954 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 806489,
            "unit": "ns/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194389,
            "unit": "B/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8647556,
            "unit": "ns/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1945370,
            "unit": "B/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60815,
            "unit": "allocs/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6144,
            "unit": "ns/op",
            "extra": "187738 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "187738 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "187738 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6863,
            "unit": "ns/op",
            "extra": "170460 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "170460 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "170460 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3865,
            "unit": "ns/op",
            "extra": "304927 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "304927 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "304927 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5302363,
            "unit": "ns/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303423,
            "unit": "B/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "225 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8001,
            "unit": "ns/op",
            "extra": "145592 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3021,
            "unit": "B/op",
            "extra": "145592 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "145592 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9182,
            "unit": "ns/op",
            "extra": "127842 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "127842 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "127842 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5512,
            "unit": "ns/op",
            "extra": "217400 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1740,
            "unit": "B/op",
            "extra": "217400 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "217400 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29968,
            "unit": "ns/op",
            "extra": "41991 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16596,
            "unit": "B/op",
            "extra": "41991 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "41991 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 105321,
            "unit": "ns/op",
            "extra": "9841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9841 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1096310,
            "unit": "ns/op",
            "extra": "1131 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1131 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1131 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14892906,
            "unit": "ns/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349916,
            "unit": "B/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "78 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7623220244,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285221136,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60930408,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 217127324,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139507608,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670227,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7973048834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422180408,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62540771,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13832,
            "unit": "ns/op",
            "extra": "86238 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "86238 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "86238 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 718.7,
            "unit": "ns/op",
            "extra": "1637445 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1637445 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1637445 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13843,
            "unit": "ns/op",
            "extra": "84969 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "84969 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "84969 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a50c61c77acde6f602cfaa79ffdf06be1db86354",
          "message": "feat: support temporal roles model (#1294)\n\n* feat: support temporal roles model\r\n\r\n* refactor: initRmMap\r\n\r\n* refactor: Conditional interface\r\n\r\n* fix: Conditional RoleManager\r\n\r\n* refactor: extract method\r\n\r\n* refactor: rebuildRoleLinks",
          "timestamp": "2023-08-16T16:14:41+08:00",
          "tree_id": "e2e417092e0d3e50f191cb6b90ffd9348545c6e7",
          "url": "https://github.com/casbin/casbin/commit/a50c61c77acde6f602cfaa79ffdf06be1db86354"
        },
        "date": 1692173961705,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57311059 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57311059 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57311059 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 208.2,
            "unit": "ns/op",
            "extra": "5801876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5801876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5801876 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 210,
            "unit": "ns/op",
            "extra": "5707236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5707236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5707236 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 223.5,
            "unit": "ns/op",
            "extra": "5283166 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5283166 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5283166 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 236.7,
            "unit": "ns/op",
            "extra": "5113957 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5113957 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5113957 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 221.3,
            "unit": "ns/op",
            "extra": "5056182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5056182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5056182 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 217.5,
            "unit": "ns/op",
            "extra": "5741703 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5741703 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5741703 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 231.6,
            "unit": "ns/op",
            "extra": "5125970 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5125970 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5125970 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3827,
            "unit": "ns/op",
            "extra": "302881 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "302881 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "302881 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 230.6,
            "unit": "ns/op",
            "extra": "5116659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5116659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5116659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 208.8,
            "unit": "ns/op",
            "extra": "5753919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5753919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5753919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 208,
            "unit": "ns/op",
            "extra": "5748560 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5748560 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5748560 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 420.6,
            "unit": "ns/op",
            "extra": "2845266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2845266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2845266 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 229.2,
            "unit": "ns/op",
            "extra": "5706589 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5706589 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5706589 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 673.1,
            "unit": "ns/op",
            "extra": "1839248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1839248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1839248 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 697,
            "unit": "ns/op",
            "extra": "1691822 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1691822 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1691822 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 730.4,
            "unit": "ns/op",
            "extra": "1664536 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1664536 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1664536 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 686.8,
            "unit": "ns/op",
            "extra": "1788297 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1788297 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1788297 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 865.2,
            "unit": "ns/op",
            "extra": "1348528 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1348528 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1348528 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1507,
            "unit": "ns/op",
            "extra": "913580 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 467,
            "unit": "B/op",
            "extra": "913580 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "913580 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 672.6,
            "unit": "ns/op",
            "extra": "1748667 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1748667 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1748667 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 782.4,
            "unit": "ns/op",
            "extra": "1473867 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1473867 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1473867 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1797,
            "unit": "ns/op",
            "extra": "703099 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 294,
            "unit": "B/op",
            "extra": "703099 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "703099 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57372142 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57372142 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57372142 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4785,
            "unit": "ns/op",
            "extra": "246913 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "246913 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "246913 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7193,
            "unit": "ns/op",
            "extra": "164541 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2037,
            "unit": "B/op",
            "extra": "164541 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "164541 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 62049,
            "unit": "ns/op",
            "extra": "19531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19986,
            "unit": "B/op",
            "extra": "19531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 655597,
            "unit": "ns/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191198,
            "unit": "B/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1846 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7854827,
            "unit": "ns/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899512,
            "unit": "B/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48175,
            "unit": "allocs/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 76575,
            "unit": "ns/op",
            "extra": "15744 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20063,
            "unit": "B/op",
            "extra": "15744 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15744 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 744067,
            "unit": "ns/op",
            "extra": "1431 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194242,
            "unit": "B/op",
            "extra": "1431 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1431 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8118629,
            "unit": "ns/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946279,
            "unit": "B/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60864,
            "unit": "allocs/op",
            "extra": "130 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5976,
            "unit": "ns/op",
            "extra": "190148 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1821,
            "unit": "B/op",
            "extra": "190148 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "190148 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6734,
            "unit": "ns/op",
            "extra": "170156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "170156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "170156 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3676,
            "unit": "ns/op",
            "extra": "318745 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "318745 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "318745 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5131663,
            "unit": "ns/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303506,
            "unit": "B/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8014,
            "unit": "ns/op",
            "extra": "148138 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "148138 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "148138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9195,
            "unit": "ns/op",
            "extra": "131368 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "131368 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "131368 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5536,
            "unit": "ns/op",
            "extra": "218488 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "218488 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "218488 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29442,
            "unit": "ns/op",
            "extra": "40570 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16606,
            "unit": "B/op",
            "extra": "40570 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "40570 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 98735,
            "unit": "ns/op",
            "extra": "12214 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "12214 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "12214 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1026525,
            "unit": "ns/op",
            "extra": "1159 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1159 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1159 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12615491,
            "unit": "ns/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349917,
            "unit": "B/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "92 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7480130172,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5289315544,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60937241,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 206167690,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139983531,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676211,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7735558852,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5424907680,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547475,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13204,
            "unit": "ns/op",
            "extra": "92454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7539,
            "unit": "B/op",
            "extra": "92454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92454 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 708,
            "unit": "ns/op",
            "extra": "1671322 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1671322 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1671322 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13065,
            "unit": "ns/op",
            "extra": "89289 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "89289 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "89289 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "985a9144d9da82d71a096f6e874f228fe6b48800",
          "message": "fix: delete comments for the test case (#1301)",
          "timestamp": "2023-08-20T10:19:00+08:00",
          "tree_id": "83ad722c088522888cc8302fb88284957091bbd1",
          "url": "https://github.com/casbin/casbin/commit/985a9144d9da82d71a096f6e874f228fe6b48800"
        },
        "date": 1692498279067,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 25.05,
            "unit": "ns/op",
            "extra": "46909921 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46909921 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46909921 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 285.8,
            "unit": "ns/op",
            "extra": "4249599 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4249599 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4249599 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 279.3,
            "unit": "ns/op",
            "extra": "4170919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4170919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4170919 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 301.3,
            "unit": "ns/op",
            "extra": "3940828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3940828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3940828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 330.7,
            "unit": "ns/op",
            "extra": "3563679 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3563679 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3563679 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 273.3,
            "unit": "ns/op",
            "extra": "4222606 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4222606 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4222606 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 310.9,
            "unit": "ns/op",
            "extra": "4239999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4239999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4239999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 308.8,
            "unit": "ns/op",
            "extra": "3794607 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3794607 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3794607 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4690,
            "unit": "ns/op",
            "extra": "262478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "262478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "262478 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 331.8,
            "unit": "ns/op",
            "extra": "3802828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3802828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3802828 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 294.7,
            "unit": "ns/op",
            "extra": "4072633 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4072633 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4072633 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 301.1,
            "unit": "ns/op",
            "extra": "4196376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4196376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4196376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 532.4,
            "unit": "ns/op",
            "extra": "2241031 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2241031 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2241031 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 280.2,
            "unit": "ns/op",
            "extra": "4371355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4371355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4371355 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 882.7,
            "unit": "ns/op",
            "extra": "1388821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1388821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1388821 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 980.8,
            "unit": "ns/op",
            "extra": "1242986 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1242986 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1242986 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 1008,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 923.7,
            "unit": "ns/op",
            "extra": "1293043 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1293043 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1293043 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1221,
            "unit": "ns/op",
            "extra": "932563 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 187,
            "unit": "B/op",
            "extra": "932563 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "932563 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1941,
            "unit": "ns/op",
            "extra": "745867 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 414,
            "unit": "B/op",
            "extra": "745867 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "745867 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 923.8,
            "unit": "ns/op",
            "extra": "1284499 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1284499 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1284499 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1091,
            "unit": "ns/op",
            "extra": "1010656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1010656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1010656 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2318,
            "unit": "ns/op",
            "extra": "556576 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 306,
            "unit": "B/op",
            "extra": "556576 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "556576 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 25.15,
            "unit": "ns/op",
            "extra": "47028642 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47028642 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47028642 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5701,
            "unit": "ns/op",
            "extra": "197142 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "197142 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "197142 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8636,
            "unit": "ns/op",
            "extra": "138964 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2036,
            "unit": "B/op",
            "extra": "138964 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "138964 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 87099,
            "unit": "ns/op",
            "extra": "14404 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19966,
            "unit": "B/op",
            "extra": "14404 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "14404 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 1013746,
            "unit": "ns/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191479,
            "unit": "B/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4832,
            "unit": "allocs/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10933852,
            "unit": "ns/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1902627,
            "unit": "B/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48256,
            "unit": "allocs/op",
            "extra": "106 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 94659,
            "unit": "ns/op",
            "extra": "12264 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20081,
            "unit": "B/op",
            "extra": "12264 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12264 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 984965,
            "unit": "ns/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194316,
            "unit": "B/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11479809,
            "unit": "ns/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1950682,
            "unit": "B/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61027,
            "unit": "allocs/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7163,
            "unit": "ns/op",
            "extra": "159831 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "159831 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "159831 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8253,
            "unit": "ns/op",
            "extra": "143487 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "143487 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "143487 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4464,
            "unit": "ns/op",
            "extra": "260901 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1511,
            "unit": "B/op",
            "extra": "260901 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "260901 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5840107,
            "unit": "ns/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304158,
            "unit": "B/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "204 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9898,
            "unit": "ns/op",
            "extra": "119229 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3020,
            "unit": "B/op",
            "extra": "119229 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "119229 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 12032,
            "unit": "ns/op",
            "extra": "104820 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "104820 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "104820 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6947,
            "unit": "ns/op",
            "extra": "161425 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "161425 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "161425 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 40749,
            "unit": "ns/op",
            "extra": "29671 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16597,
            "unit": "B/op",
            "extra": "29671 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "29671 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 133072,
            "unit": "ns/op",
            "extra": "9146 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11952,
            "unit": "B/op",
            "extra": "9146 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9146 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1426750,
            "unit": "ns/op",
            "extra": "840 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125907,
            "unit": "B/op",
            "extra": "840 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "840 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 17899649,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349922,
            "unit": "B/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "67 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 10816579694,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286243352,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60935971,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 293484917,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139795270,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676170,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 10659661076,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423137320,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62546421,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 17012,
            "unit": "ns/op",
            "extra": "67579 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "67579 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "67579 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 915,
            "unit": "ns/op",
            "extra": "1322622 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1322622 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1322622 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16709,
            "unit": "ns/op",
            "extra": "66462 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7541,
            "unit": "B/op",
            "extra": "66462 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "66462 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "retmain@foxmail.com",
            "name": "voidman",
            "username": "mtt0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e46d08ee10207a3fd89972e40590f794612e27d1",
          "message": "fix: different types of role definition panic (#1304)",
          "timestamp": "2023-08-25T16:32:34+08:00",
          "tree_id": "bd285b1c898fa6aa9700ec68875f09b1a0bc8708",
          "url": "https://github.com/casbin/casbin/commit/e46d08ee10207a3fd89972e40590f794612e27d1"
        },
        "date": 1692952623652,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "56181526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56181526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56181526 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 201.8,
            "unit": "ns/op",
            "extra": "5640073 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5640073 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5640073 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 202.6,
            "unit": "ns/op",
            "extra": "5956204 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5956204 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5956204 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 221.3,
            "unit": "ns/op",
            "extra": "5199331 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5199331 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5199331 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 225.6,
            "unit": "ns/op",
            "extra": "5006355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5006355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5006355 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 224.8,
            "unit": "ns/op",
            "extra": "5069959 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5069959 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5069959 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 202.5,
            "unit": "ns/op",
            "extra": "5838850 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5838850 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5838850 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 226.2,
            "unit": "ns/op",
            "extra": "5300214 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5300214 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5300214 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3825,
            "unit": "ns/op",
            "extra": "310555 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1525,
            "unit": "B/op",
            "extra": "310555 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "310555 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 230.9,
            "unit": "ns/op",
            "extra": "5217790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5217790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5217790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 203.3,
            "unit": "ns/op",
            "extra": "5930295 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5930295 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5930295 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 222,
            "unit": "ns/op",
            "extra": "5731138 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5731138 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5731138 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 421.4,
            "unit": "ns/op",
            "extra": "2817001 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2817001 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2817001 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 209.4,
            "unit": "ns/op",
            "extra": "5543065 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5543065 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5543065 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 657.8,
            "unit": "ns/op",
            "extra": "1834491 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1834491 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1834491 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 685.1,
            "unit": "ns/op",
            "extra": "1752751 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1752751 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1752751 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 706.1,
            "unit": "ns/op",
            "extra": "1634070 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1634070 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1634070 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 693,
            "unit": "ns/op",
            "extra": "1799440 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1799440 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1799440 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 820.5,
            "unit": "ns/op",
            "extra": "1383217 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1383217 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1383217 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1473,
            "unit": "ns/op",
            "extra": "878335 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 412,
            "unit": "B/op",
            "extra": "878335 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "878335 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 671.1,
            "unit": "ns/op",
            "extra": "1817886 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1817886 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1817886 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 780.5,
            "unit": "ns/op",
            "extra": "1428064 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1428064 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1428064 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1657,
            "unit": "ns/op",
            "extra": "920576 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "920576 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "920576 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57413556 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57413556 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57413556 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4784,
            "unit": "ns/op",
            "extra": "244080 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1492,
            "unit": "B/op",
            "extra": "244080 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "244080 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7283,
            "unit": "ns/op",
            "extra": "166736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2038,
            "unit": "B/op",
            "extra": "166736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "166736 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 62519,
            "unit": "ns/op",
            "extra": "19128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19997,
            "unit": "B/op",
            "extra": "19128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19128 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 628886,
            "unit": "ns/op",
            "extra": "1908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191308,
            "unit": "B/op",
            "extra": "1908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "1908 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7409476,
            "unit": "ns/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899522,
            "unit": "B/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48175,
            "unit": "allocs/op",
            "extra": "153 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 74834,
            "unit": "ns/op",
            "extra": "16131 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20093,
            "unit": "B/op",
            "extra": "16131 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "16131 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 753357,
            "unit": "ns/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194368,
            "unit": "B/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8379338,
            "unit": "ns/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1944404,
            "unit": "B/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60776,
            "unit": "allocs/op",
            "extra": "145 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5911,
            "unit": "ns/op",
            "extra": "188110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "188110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "188110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6716,
            "unit": "ns/op",
            "extra": "177577 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1808,
            "unit": "B/op",
            "extra": "177577 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "177577 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3694,
            "unit": "ns/op",
            "extra": "319698 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1516,
            "unit": "B/op",
            "extra": "319698 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "319698 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5044726,
            "unit": "ns/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1305218,
            "unit": "B/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "236 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7902,
            "unit": "ns/op",
            "extra": "152502 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3028,
            "unit": "B/op",
            "extra": "152502 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "152502 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9117,
            "unit": "ns/op",
            "extra": "131817 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2446,
            "unit": "B/op",
            "extra": "131817 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "131817 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5597,
            "unit": "ns/op",
            "extra": "213463 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "213463 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "213463 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28171,
            "unit": "ns/op",
            "extra": "42894 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16607,
            "unit": "B/op",
            "extra": "42894 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "42894 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 97935,
            "unit": "ns/op",
            "extra": "12309 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "12309 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "12309 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1025065,
            "unit": "ns/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1164 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14771294,
            "unit": "ns/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349922,
            "unit": "B/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "81 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7388723866,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5292652424,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60937806,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 203625286,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140103579,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676236,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7737591512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5428503400,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62548080,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13966,
            "unit": "ns/op",
            "extra": "85849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "85849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "85849 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 706.3,
            "unit": "ns/op",
            "extra": "1704020 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1704020 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1704020 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13057,
            "unit": "ns/op",
            "extra": "94095 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7540,
            "unit": "B/op",
            "extra": "94095 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "94095 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "retmain@foxmail.com",
            "name": "voidman",
            "username": "mtt0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b8840336ccc3b33627d4540e4364b39cf05c884",
          "message": "feat: fix different types of role definition wrong g function (#1307)",
          "timestamp": "2023-08-27T00:59:33+08:00",
          "tree_id": "a2b47085f714157e6e5e5b479fac559df0277ebb",
          "url": "https://github.com/casbin/casbin/commit/3b8840336ccc3b33627d4540e4364b39cf05c884"
        },
        "date": 1693069533205,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.73,
            "unit": "ns/op",
            "extra": "48087842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48087842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48087842 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 300.9,
            "unit": "ns/op",
            "extra": "4118037 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4118037 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4118037 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 294,
            "unit": "ns/op",
            "extra": "4131553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4131553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4131553 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 302.5,
            "unit": "ns/op",
            "extra": "3926518 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3926518 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3926518 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 317.2,
            "unit": "ns/op",
            "extra": "3808908 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3808908 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3808908 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 264.4,
            "unit": "ns/op",
            "extra": "3892084 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3892084 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3892084 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 289.6,
            "unit": "ns/op",
            "extra": "4029711 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4029711 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4029711 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 329.9,
            "unit": "ns/op",
            "extra": "3867374 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3867374 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3867374 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4669,
            "unit": "ns/op",
            "extra": "254056 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "254056 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "254056 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 319.7,
            "unit": "ns/op",
            "extra": "3886910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3886910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3886910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 295.2,
            "unit": "ns/op",
            "extra": "4084824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4084824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4084824 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 300.6,
            "unit": "ns/op",
            "extra": "4245528 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4245528 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4245528 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 575,
            "unit": "ns/op",
            "extra": "2067652 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2067652 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2067652 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 260.9,
            "unit": "ns/op",
            "extra": "4586376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4586376 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4586376 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 864.2,
            "unit": "ns/op",
            "extra": "1344654 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1344654 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1344654 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 949.1,
            "unit": "ns/op",
            "extra": "1248594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1248594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1248594 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 1021,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 912.3,
            "unit": "ns/op",
            "extra": "1227403 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1227403 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1227403 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1335,
            "unit": "ns/op",
            "extra": "865182 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 190,
            "unit": "B/op",
            "extra": "865182 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "865182 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2168,
            "unit": "ns/op",
            "extra": "685371 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 430,
            "unit": "B/op",
            "extra": "685371 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "685371 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 925.3,
            "unit": "ns/op",
            "extra": "1262810 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1262810 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1262810 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1062,
            "unit": "ns/op",
            "extra": "1001421 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1001421 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1001421 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2332,
            "unit": "ns/op",
            "extra": "554355 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 297,
            "unit": "B/op",
            "extra": "554355 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "554355 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.83,
            "unit": "ns/op",
            "extra": "46491459 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46491459 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46491459 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 6203,
            "unit": "ns/op",
            "extra": "188160 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "188160 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "188160 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 9743,
            "unit": "ns/op",
            "extra": "127107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2032,
            "unit": "B/op",
            "extra": "127107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "127107 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 85933,
            "unit": "ns/op",
            "extra": "13479 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20001,
            "unit": "B/op",
            "extra": "13479 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "13479 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 1034963,
            "unit": "ns/op",
            "extra": "1171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191262,
            "unit": "B/op",
            "extra": "1171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1171 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 12002893,
            "unit": "ns/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1913428,
            "unit": "B/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48547,
            "unit": "allocs/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 102949,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20044,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 1028840,
            "unit": "ns/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194148,
            "unit": "B/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 13069146,
            "unit": "ns/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1954091,
            "unit": "B/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61164,
            "unit": "allocs/op",
            "extra": "96 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 7598,
            "unit": "ns/op",
            "extra": "152032 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "152032 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "152032 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 8634,
            "unit": "ns/op",
            "extra": "133976 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "133976 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "133976 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4809,
            "unit": "ns/op",
            "extra": "228230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "228230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "228230 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 6256070,
            "unit": "ns/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304174,
            "unit": "B/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "190 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 10028,
            "unit": "ns/op",
            "extra": "111252 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3020,
            "unit": "B/op",
            "extra": "111252 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "111252 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 11700,
            "unit": "ns/op",
            "extra": "102364 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2445,
            "unit": "B/op",
            "extra": "102364 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "102364 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 7363,
            "unit": "ns/op",
            "extra": "166950 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "166950 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "166950 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 41277,
            "unit": "ns/op",
            "extra": "28123 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16611,
            "unit": "B/op",
            "extra": "28123 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "28123 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 125101,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11952,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1310573,
            "unit": "ns/op",
            "extra": "852 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125907,
            "unit": "B/op",
            "extra": "852 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "852 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 18311677,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 11254167453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5289092176,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936349,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 326736696,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139839698,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676165,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 11517714364,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5425607368,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62546688,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 17972,
            "unit": "ns/op",
            "extra": "70483 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7547,
            "unit": "B/op",
            "extra": "70483 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "70483 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 909.1,
            "unit": "ns/op",
            "extra": "1324401 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1324401 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1324401 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 17606,
            "unit": "ns/op",
            "extra": "60505 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7549,
            "unit": "B/op",
            "extra": "60505 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "60505 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37b0889678670bc9cb6cd250b140a13711b4ada6",
          "message": "feat: add ContextAdapter interface to support context in adapters (#1305)\n\n* feat: AdapterWithContext interface\r\n\r\n* refactor: ContextAdapter interface\r\n\r\n* Update adapter_context.go\r\n\r\n* Update adapter_context.go\r\n\r\n* Update adapter_context.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-08-28T13:16:54+08:00",
          "tree_id": "5c6fd15e7169d032cdf42f5321ebf45985ce3acd",
          "url": "https://github.com/casbin/casbin/commit/37b0889678670bc9cb6cd250b140a13711b4ada6"
        },
        "date": 1693200142644,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.61,
            "unit": "ns/op",
            "extra": "48836750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48836750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48836750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 285.2,
            "unit": "ns/op",
            "extra": "4234380 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4234380 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4234380 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 280.7,
            "unit": "ns/op",
            "extra": "4202541 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4202541 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4202541 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 283.4,
            "unit": "ns/op",
            "extra": "4246659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4246659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4246659 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 310,
            "unit": "ns/op",
            "extra": "3856586 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "3856586 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3856586 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 269,
            "unit": "ns/op",
            "extra": "4243542 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4243542 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4243542 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 285.9,
            "unit": "ns/op",
            "extra": "4123503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4123503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4123503 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 299.1,
            "unit": "ns/op",
            "extra": "3763635 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "3763635 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3763635 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4422,
            "unit": "ns/op",
            "extra": "287529 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "287529 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "287529 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 315.6,
            "unit": "ns/op",
            "extra": "3738752 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "3738752 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3738752 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 289.6,
            "unit": "ns/op",
            "extra": "4317282 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4317282 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4317282 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 283,
            "unit": "ns/op",
            "extra": "4144666 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4144666 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4144666 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 542.8,
            "unit": "ns/op",
            "extra": "2154909 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2154909 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2154909 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 277.4,
            "unit": "ns/op",
            "extra": "4048434 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4048434 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4048434 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 859.1,
            "unit": "ns/op",
            "extra": "1425556 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1425556 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1425556 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 894.2,
            "unit": "ns/op",
            "extra": "1350637 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1350637 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1350637 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 956.6,
            "unit": "ns/op",
            "extra": "1252174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1252174 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1252174 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 877.3,
            "unit": "ns/op",
            "extra": "1339594 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1339594 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1339594 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1130,
            "unit": "ns/op",
            "extra": "1030808 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 185,
            "unit": "B/op",
            "extra": "1030808 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1030808 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1951,
            "unit": "ns/op",
            "extra": "731148 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 417,
            "unit": "B/op",
            "extra": "731148 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "731148 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 865.1,
            "unit": "ns/op",
            "extra": "1352784 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1352784 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1352784 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1024,
            "unit": "ns/op",
            "extra": "1106446 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1106446 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1106446 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2382,
            "unit": "ns/op",
            "extra": "471279 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 305,
            "unit": "B/op",
            "extra": "471279 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "471279 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.3,
            "unit": "ns/op",
            "extra": "51669366 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51669366 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51669366 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5703,
            "unit": "ns/op",
            "extra": "206563 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1491,
            "unit": "B/op",
            "extra": "206563 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "206563 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8300,
            "unit": "ns/op",
            "extra": "125188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2038,
            "unit": "B/op",
            "extra": "125188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "125188 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 78977,
            "unit": "ns/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20016,
            "unit": "B/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15580 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 958915,
            "unit": "ns/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191303,
            "unit": "B/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4826,
            "unit": "allocs/op",
            "extra": "1255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10072846,
            "unit": "ns/op",
            "extra": "115 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1894800,
            "unit": "B/op",
            "extra": "115 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48040,
            "unit": "allocs/op",
            "extra": "115 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 90194,
            "unit": "ns/op",
            "extra": "12276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20105,
            "unit": "B/op",
            "extra": "12276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12276 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 925728,
            "unit": "ns/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194240,
            "unit": "B/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6024,
            "unit": "allocs/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 10995712,
            "unit": "ns/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1952396,
            "unit": "B/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61097,
            "unit": "allocs/op",
            "extra": "102 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6879,
            "unit": "ns/op",
            "extra": "160729 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "160729 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "160729 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7779,
            "unit": "ns/op",
            "extra": "151651 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "151651 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "151651 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4274,
            "unit": "ns/op",
            "extra": "277914 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1515,
            "unit": "B/op",
            "extra": "277914 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "277914 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5683517,
            "unit": "ns/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1305638,
            "unit": "B/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "213 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9026,
            "unit": "ns/op",
            "extra": "130777 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3027,
            "unit": "B/op",
            "extra": "130777 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "130777 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10934,
            "unit": "ns/op",
            "extra": "109410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2448,
            "unit": "B/op",
            "extra": "109410 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "109410 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6280,
            "unit": "ns/op",
            "extra": "189682 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "189682 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "189682 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 34289,
            "unit": "ns/op",
            "extra": "33564 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16602,
            "unit": "B/op",
            "extra": "33564 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "33564 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 121817,
            "unit": "ns/op",
            "extra": "8902 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "8902 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "8902 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1257872,
            "unit": "ns/op",
            "extra": "914 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "914 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "914 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 15997523,
            "unit": "ns/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "73 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9639008475,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5294561368,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60938206,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 257551844,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140019348,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676221,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9926721989,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5432188224,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62548730,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 16006,
            "unit": "ns/op",
            "extra": "78294 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "78294 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "78294 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 852.1,
            "unit": "ns/op",
            "extra": "1407958 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1407958 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1407958 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 16425,
            "unit": "ns/op",
            "extra": "71666 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "71666 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "71666 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cde2646d10ad1190c0d784c3a1c0e1ace1b5bc9",
          "message": "fix: fix the ContextRoleManager interface (#1308)\n\n* refactor: ContextRoleManager interface\r\n\r\n* refactor: remove RoleManagerWithContext\r\n\r\n* Update role_manager.go\r\n\r\n* Update context_role_manager.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-08-28T14:36:45+08:00",
          "tree_id": "32b870802f80f7e18c48fa411fdab8687d3d4f49",
          "url": "https://github.com/casbin/casbin/commit/1cde2646d10ad1190c0d784c3a1c0e1ace1b5bc9"
        },
        "date": 1693204875805,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.95,
            "unit": "ns/op",
            "extra": "53252284 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53252284 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53252284 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 207.1,
            "unit": "ns/op",
            "extra": "5788716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5788716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5788716 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 202.7,
            "unit": "ns/op",
            "extra": "5822179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5822179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5822179 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 222.5,
            "unit": "ns/op",
            "extra": "5420194 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5420194 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5420194 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 220.6,
            "unit": "ns/op",
            "extra": "5333636 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5333636 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5333636 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 206.1,
            "unit": "ns/op",
            "extra": "5475846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5475846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5475846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 203.3,
            "unit": "ns/op",
            "extra": "5854983 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5854983 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5854983 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 227.1,
            "unit": "ns/op",
            "extra": "5275929 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5275929 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5275929 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3762,
            "unit": "ns/op",
            "extra": "304143 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1524,
            "unit": "B/op",
            "extra": "304143 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "304143 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 235.5,
            "unit": "ns/op",
            "extra": "5040012 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "5040012 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5040012 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 203.3,
            "unit": "ns/op",
            "extra": "5900589 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5900589 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5900589 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 220.3,
            "unit": "ns/op",
            "extra": "5743051 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5743051 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5743051 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 409.7,
            "unit": "ns/op",
            "extra": "2930925 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2930925 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2930925 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 221.2,
            "unit": "ns/op",
            "extra": "4900750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4900750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4900750 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 642.3,
            "unit": "ns/op",
            "extra": "1771033 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1771033 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1771033 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 731.6,
            "unit": "ns/op",
            "extra": "1718434 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1718434 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1718434 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 732.8,
            "unit": "ns/op",
            "extra": "1676377 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1676377 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1676377 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 675.3,
            "unit": "ns/op",
            "extra": "1789986 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1789986 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1789986 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 868.8,
            "unit": "ns/op",
            "extra": "1409074 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1409074 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1409074 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1552,
            "unit": "ns/op",
            "extra": "893750 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "893750 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "893750 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 670,
            "unit": "ns/op",
            "extra": "1762864 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1762864 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1762864 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 784.3,
            "unit": "ns/op",
            "extra": "1449918 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1449918 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1449918 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1677,
            "unit": "ns/op",
            "extra": "678126 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 299,
            "unit": "B/op",
            "extra": "678126 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "678126 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "57383989 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57383989 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57383989 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4741,
            "unit": "ns/op",
            "extra": "248238 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1492,
            "unit": "B/op",
            "extra": "248238 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "248238 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7263,
            "unit": "ns/op",
            "extra": "166080 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2039,
            "unit": "B/op",
            "extra": "166080 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "166080 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 62531,
            "unit": "ns/op",
            "extra": "19328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19996,
            "unit": "B/op",
            "extra": "19328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "19328 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 653744,
            "unit": "ns/op",
            "extra": "1825 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191315,
            "unit": "B/op",
            "extra": "1825 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "1825 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 7515876,
            "unit": "ns/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901998,
            "unit": "B/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48244,
            "unit": "allocs/op",
            "extra": "156 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 74810,
            "unit": "ns/op",
            "extra": "15792 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20076,
            "unit": "B/op",
            "extra": "15792 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15792 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 741264,
            "unit": "ns/op",
            "extra": "1432 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194195,
            "unit": "B/op",
            "extra": "1432 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1432 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8205497,
            "unit": "ns/op",
            "extra": "141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1944959,
            "unit": "B/op",
            "extra": "141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60798,
            "unit": "allocs/op",
            "extra": "141 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5963,
            "unit": "ns/op",
            "extra": "189213 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "189213 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "189213 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6676,
            "unit": "ns/op",
            "extra": "176755 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "176755 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "176755 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3695,
            "unit": "ns/op",
            "extra": "320672 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1515,
            "unit": "B/op",
            "extra": "320672 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "320672 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5072624,
            "unit": "ns/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304929,
            "unit": "B/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "235 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7957,
            "unit": "ns/op",
            "extra": "149438 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3025,
            "unit": "B/op",
            "extra": "149438 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "149438 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9132,
            "unit": "ns/op",
            "extra": "130131 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2445,
            "unit": "B/op",
            "extra": "130131 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "130131 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5526,
            "unit": "ns/op",
            "extra": "212463 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1741,
            "unit": "B/op",
            "extra": "212463 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "212463 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 28480,
            "unit": "ns/op",
            "extra": "41235 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16624,
            "unit": "B/op",
            "extra": "41235 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "41235 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 98149,
            "unit": "ns/op",
            "extra": "12129 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "12129 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "12129 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1032634,
            "unit": "ns/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1148 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12745560,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7617577707,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5295153120,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60938301,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 207445699,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140000300,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676226,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7766460554,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5433237592,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62548970,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13088,
            "unit": "ns/op",
            "extra": "90375 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7550,
            "unit": "B/op",
            "extra": "90375 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "90375 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 708.9,
            "unit": "ns/op",
            "extra": "1685731 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1685731 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1685731 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 12969,
            "unit": "ns/op",
            "extra": "92755 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7541,
            "unit": "B/op",
            "extra": "92755 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "92755 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ee4a9bbdcc427ed9b9a21b0a5451d4c2056b721",
          "message": "fix: requestJsonReplace (#1313)",
          "timestamp": "2023-09-02T23:35:45+08:00",
          "tree_id": "17cfe6b0858be828114716cf7bb53afe53434019",
          "url": "https://github.com/casbin/casbin/commit/0ee4a9bbdcc427ed9b9a21b0a5451d4c2056b721"
        },
        "date": 1693669263714,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 24.39,
            "unit": "ns/op",
            "extra": "49831245 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "49831245 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "49831245 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 284.3,
            "unit": "ns/op",
            "extra": "4258803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4258803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4258803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 285.8,
            "unit": "ns/op",
            "extra": "4298860 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4298860 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4298860 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 280.6,
            "unit": "ns/op",
            "extra": "4186851 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4186851 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4186851 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 287.5,
            "unit": "ns/op",
            "extra": "4134680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4134680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4134680 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 272.5,
            "unit": "ns/op",
            "extra": "3987798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "3987798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3987798 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 290.3,
            "unit": "ns/op",
            "extra": "4003225 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4003225 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4003225 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 323.9,
            "unit": "ns/op",
            "extra": "4068696 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4068696 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4068696 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4327,
            "unit": "ns/op",
            "extra": "277803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1523,
            "unit": "B/op",
            "extra": "277803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "277803 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 298.9,
            "unit": "ns/op",
            "extra": "4050567 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4050567 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4050567 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 272.9,
            "unit": "ns/op",
            "extra": "4241395 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4241395 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4241395 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 275.3,
            "unit": "ns/op",
            "extra": "4387746 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4387746 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4387746 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 525,
            "unit": "ns/op",
            "extra": "2395639 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2395639 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2395639 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 273,
            "unit": "ns/op",
            "extra": "3793916 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "3793916 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "3793916 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 828.2,
            "unit": "ns/op",
            "extra": "1360683 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1360683 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1360683 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 898.2,
            "unit": "ns/op",
            "extra": "1320506 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1320506 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1320506 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 957.6,
            "unit": "ns/op",
            "extra": "1253943 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1253943 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1253943 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 888.4,
            "unit": "ns/op",
            "extra": "1356692 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1356692 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1356692 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1246,
            "unit": "ns/op",
            "extra": "980318 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 186,
            "unit": "B/op",
            "extra": "980318 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "980318 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 2042,
            "unit": "ns/op",
            "extra": "831082 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 422,
            "unit": "B/op",
            "extra": "831082 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "831082 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 905.1,
            "unit": "ns/op",
            "extra": "1310688 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1310688 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1310688 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 1067,
            "unit": "ns/op",
            "extra": "1073454 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 179,
            "unit": "B/op",
            "extra": "1073454 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1073454 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 2373,
            "unit": "ns/op",
            "extra": "506918 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 294,
            "unit": "B/op",
            "extra": "506918 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "506918 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 24.62,
            "unit": "ns/op",
            "extra": "48538389 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "48538389 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "48538389 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5683,
            "unit": "ns/op",
            "extra": "199255 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "199255 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "199255 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8485,
            "unit": "ns/op",
            "extra": "142459 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2035,
            "unit": "B/op",
            "extra": "142459 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "142459 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 81208,
            "unit": "ns/op",
            "extra": "15066 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19996,
            "unit": "B/op",
            "extra": "15066 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "15066 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 978310,
            "unit": "ns/op",
            "extra": "1212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191385,
            "unit": "B/op",
            "extra": "1212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "1212 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 10112377,
            "unit": "ns/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1912750,
            "unit": "B/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48547,
            "unit": "allocs/op",
            "extra": "109 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 94674,
            "unit": "ns/op",
            "extra": "12409 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20036,
            "unit": "B/op",
            "extra": "12409 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "12409 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 974175,
            "unit": "ns/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194544,
            "unit": "B/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6025,
            "unit": "allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 11150318,
            "unit": "ns/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1950008,
            "unit": "B/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61000,
            "unit": "allocs/op",
            "extra": "112 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6969,
            "unit": "ns/op",
            "extra": "162637 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1819,
            "unit": "B/op",
            "extra": "162637 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "162637 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7898,
            "unit": "ns/op",
            "extra": "151447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "151447 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "151447 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4403,
            "unit": "ns/op",
            "extra": "270843 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "270843 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "270843 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5671111,
            "unit": "ns/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1304354,
            "unit": "B/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 9077,
            "unit": "ns/op",
            "extra": "120926 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3022,
            "unit": "B/op",
            "extra": "120926 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "120926 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10584,
            "unit": "ns/op",
            "extra": "117938 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "117938 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "117938 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6329,
            "unit": "ns/op",
            "extra": "193714 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "193714 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "193714 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 34804,
            "unit": "ns/op",
            "extra": "33085 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16609,
            "unit": "B/op",
            "extra": "33085 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "33085 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 120598,
            "unit": "ns/op",
            "extra": "9346 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "9346 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "9346 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1276653,
            "unit": "ns/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "904 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 15080936,
            "unit": "ns/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349918,
            "unit": "B/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "68 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 9476409528,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5290137536,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60937469,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 251282020,
            "unit": "ns/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140158546,
            "unit": "B/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676245,
            "unit": "allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9842838796,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5427432536,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547913,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 14945,
            "unit": "ns/op",
            "extra": "81051 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7542,
            "unit": "B/op",
            "extra": "81051 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "81051 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 872.7,
            "unit": "ns/op",
            "extra": "1382049 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1382049 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1382049 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 15534,
            "unit": "ns/op",
            "extra": "75494 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "75494 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "75494 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "c907b9054e5a179fe7d1f64b3003837de3969bcc",
          "message": "Improve README table",
          "timestamp": "2023-09-25T19:23:35+08:00",
          "tree_id": "aa1f53a4ef1150c4d74263b08901cdfd8753e3da",
          "url": "https://github.com/casbin/casbin/commit/c907b9054e5a179fe7d1f64b3003837de3969bcc"
        },
        "date": 1695641290467,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.63,
            "unit": "ns/op",
            "extra": "58157965 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58157965 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58157965 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 227.4,
            "unit": "ns/op",
            "extra": "5268999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5268999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5268999 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 228.7,
            "unit": "ns/op",
            "extra": "5267260 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5267260 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5267260 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 234.8,
            "unit": "ns/op",
            "extra": "5054848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5054848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5054848 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 254.7,
            "unit": "ns/op",
            "extra": "4521764 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4521764 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4521764 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 219.1,
            "unit": "ns/op",
            "extra": "5166918 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "5166918 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "5166918 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 228.8,
            "unit": "ns/op",
            "extra": "5149381 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5149381 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5149381 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 245,
            "unit": "ns/op",
            "extra": "4913962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4913962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4913962 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3578,
            "unit": "ns/op",
            "extra": "317041 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "317041 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "317041 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 246,
            "unit": "ns/op",
            "extra": "4841546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4841546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4841546 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 227.7,
            "unit": "ns/op",
            "extra": "5280296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5280296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5280296 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 240.7,
            "unit": "ns/op",
            "extra": "5176604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5176604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5176604 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 432,
            "unit": "ns/op",
            "extra": "2812088 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2812088 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2812088 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 235.2,
            "unit": "ns/op",
            "extra": "4812295 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4812295 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4812295 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 680.6,
            "unit": "ns/op",
            "extra": "1761055 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1761055 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1761055 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 747.2,
            "unit": "ns/op",
            "extra": "1588872 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1588872 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1588872 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 758.8,
            "unit": "ns/op",
            "extra": "1534728 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1534728 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1534728 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 720.8,
            "unit": "ns/op",
            "extra": "1702317 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1702317 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1702317 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 957.6,
            "unit": "ns/op",
            "extra": "1250199 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 180,
            "unit": "B/op",
            "extra": "1250199 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1250199 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1700,
            "unit": "ns/op",
            "extra": "930664 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 463,
            "unit": "B/op",
            "extra": "930664 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "930664 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 720.7,
            "unit": "ns/op",
            "extra": "1667485 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1667485 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1667485 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 812,
            "unit": "ns/op",
            "extra": "1389076 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1389076 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1389076 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1670,
            "unit": "ns/op",
            "extra": "648380 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "648380 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "648380 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.59,
            "unit": "ns/op",
            "extra": "58250506 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58250506 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58250506 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4603,
            "unit": "ns/op",
            "extra": "248925 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1488,
            "unit": "B/op",
            "extra": "248925 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "248925 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7097,
            "unit": "ns/op",
            "extra": "166962 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2033,
            "unit": "B/op",
            "extra": "166962 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "166962 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 63713,
            "unit": "ns/op",
            "extra": "18770 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19961,
            "unit": "B/op",
            "extra": "18770 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18770 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 723241,
            "unit": "ns/op",
            "extra": "1670 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191292,
            "unit": "B/op",
            "extra": "1670 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "1670 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 8190155,
            "unit": "ns/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899289,
            "unit": "B/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48168,
            "unit": "allocs/op",
            "extra": "138 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 78583,
            "unit": "ns/op",
            "extra": "15351 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20024,
            "unit": "B/op",
            "extra": "15351 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15351 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 759773,
            "unit": "ns/op",
            "extra": "1484 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194076,
            "unit": "B/op",
            "extra": "1484 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1484 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 8955833,
            "unit": "ns/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1948375,
            "unit": "B/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60935,
            "unit": "allocs/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5745,
            "unit": "ns/op",
            "extra": "195357 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "195357 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "195357 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6503,
            "unit": "ns/op",
            "extra": "178136 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1803,
            "unit": "B/op",
            "extra": "178136 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "178136 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3587,
            "unit": "ns/op",
            "extra": "322438 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1511,
            "unit": "B/op",
            "extra": "322438 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "322438 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 4886698,
            "unit": "ns/op",
            "extra": "246 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1302457,
            "unit": "B/op",
            "extra": "246 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "246 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7729,
            "unit": "ns/op",
            "extra": "152110 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3018,
            "unit": "B/op",
            "extra": "152110 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "152110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9174,
            "unit": "ns/op",
            "extra": "132003 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2443,
            "unit": "B/op",
            "extra": "132003 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "132003 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5294,
            "unit": "ns/op",
            "extra": "216037 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1737,
            "unit": "B/op",
            "extra": "216037 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "216037 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29392,
            "unit": "ns/op",
            "extra": "40430 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16600,
            "unit": "B/op",
            "extra": "40430 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "40430 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 99155,
            "unit": "ns/op",
            "extra": "12033 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11952,
            "unit": "B/op",
            "extra": "12033 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "12033 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1036586,
            "unit": "ns/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1173 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 12397943,
            "unit": "ns/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349918,
            "unit": "B/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "85 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7785706663,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5285519344,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936186,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 212630286,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139762052,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676177,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 7953300670,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422141896,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62546523,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13547,
            "unit": "ns/op",
            "extra": "90325 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "90325 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "90325 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 720.9,
            "unit": "ns/op",
            "extra": "1649649 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1649649 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1649649 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13273,
            "unit": "ns/op",
            "extra": "88244 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "88244 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "88244 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "committer": {
            "email": "hsluoyz@qq.com",
            "name": "Yang Luo",
            "username": "hsluoyz"
          },
          "distinct": true,
          "id": "17becaef6cfd033a07874fce1ade4953e6ead8b5",
          "message": "Remove PerformancePR.yml for security issue",
          "timestamp": "2023-10-30T14:05:45+08:00",
          "tree_id": "0c6d6373c498a1bfc104886cb2eeb041767416f3",
          "url": "https://github.com/casbin/casbin/commit/17becaef6cfd033a07874fce1ade4953e6ead8b5"
        },
        "date": 1698646246889,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.63,
            "unit": "ns/op",
            "extra": "57399399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57399399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57399399 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 236.9,
            "unit": "ns/op",
            "extra": "5061151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5061151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5061151 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 250.4,
            "unit": "ns/op",
            "extra": "5016055 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5016055 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5016055 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 262.2,
            "unit": "ns/op",
            "extra": "4660142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4660142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4660142 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 263.8,
            "unit": "ns/op",
            "extra": "4586016 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4586016 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4586016 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 244.6,
            "unit": "ns/op",
            "extra": "4931884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "4931884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4931884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 248,
            "unit": "ns/op",
            "extra": "4870066 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4870066 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4870066 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 284.5,
            "unit": "ns/op",
            "extra": "4364910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4364910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4364910 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3971,
            "unit": "ns/op",
            "extra": "294446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "294446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "294446 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 270.9,
            "unit": "ns/op",
            "extra": "4366832 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4366832 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4366832 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 249.5,
            "unit": "ns/op",
            "extra": "4849731 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4849731 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4849731 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 259.1,
            "unit": "ns/op",
            "extra": "4843537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4843537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4843537 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 472,
            "unit": "ns/op",
            "extra": "2365408 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2365408 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2365408 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 219.5,
            "unit": "ns/op",
            "extra": "4984830 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "4984830 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4984830 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 743.1,
            "unit": "ns/op",
            "extra": "1581688 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1581688 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1581688 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 759.1,
            "unit": "ns/op",
            "extra": "1538043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1538043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1538043 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 852.5,
            "unit": "ns/op",
            "extra": "1434051 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1434051 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1434051 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 748.8,
            "unit": "ns/op",
            "extra": "1610832 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1610832 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1610832 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1049,
            "unit": "ns/op",
            "extra": "1135736 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 182,
            "unit": "B/op",
            "extra": "1135736 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1135736 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1653,
            "unit": "ns/op",
            "extra": "826563 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 423,
            "unit": "B/op",
            "extra": "826563 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "826563 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 743.5,
            "unit": "ns/op",
            "extra": "1592299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1592299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1592299 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 876,
            "unit": "ns/op",
            "extra": "1303406 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1303406 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1303406 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1976,
            "unit": "ns/op",
            "extra": "638277 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 291,
            "unit": "B/op",
            "extra": "638277 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "638277 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.59,
            "unit": "ns/op",
            "extra": "58099501 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58099501 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58099501 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4872,
            "unit": "ns/op",
            "extra": "243049 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1489,
            "unit": "B/op",
            "extra": "243049 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "243049 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7256,
            "unit": "ns/op",
            "extra": "161205 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2034,
            "unit": "B/op",
            "extra": "161205 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "161205 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 68988,
            "unit": "ns/op",
            "extra": "17794 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19976,
            "unit": "B/op",
            "extra": "17794 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "17794 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 811189,
            "unit": "ns/op",
            "extra": "1490 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191283,
            "unit": "B/op",
            "extra": "1490 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "1490 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9028181,
            "unit": "ns/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1903188,
            "unit": "B/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48274,
            "unit": "allocs/op",
            "extra": "120 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 81659,
            "unit": "ns/op",
            "extra": "14590 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20044,
            "unit": "B/op",
            "extra": "14590 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "14590 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 815797,
            "unit": "ns/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194452,
            "unit": "B/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6023,
            "unit": "allocs/op",
            "extra": "1386 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 9981906,
            "unit": "ns/op",
            "extra": "104 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1951923,
            "unit": "B/op",
            "extra": "104 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 61076,
            "unit": "allocs/op",
            "extra": "104 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6110,
            "unit": "ns/op",
            "extra": "188041 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1820,
            "unit": "B/op",
            "extra": "188041 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "188041 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6915,
            "unit": "ns/op",
            "extra": "173499 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1805,
            "unit": "B/op",
            "extra": "173499 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "173499 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3716,
            "unit": "ns/op",
            "extra": "311018 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1512,
            "unit": "B/op",
            "extra": "311018 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "311018 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5064636,
            "unit": "ns/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1303104,
            "unit": "B/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "226 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8119,
            "unit": "ns/op",
            "extra": "151417 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3021,
            "unit": "B/op",
            "extra": "151417 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "151417 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9458,
            "unit": "ns/op",
            "extra": "124891 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2444,
            "unit": "B/op",
            "extra": "124891 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "124891 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5611,
            "unit": "ns/op",
            "extra": "213183 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1738,
            "unit": "B/op",
            "extra": "213183 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "213183 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 32155,
            "unit": "ns/op",
            "extra": "37342 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16607,
            "unit": "B/op",
            "extra": "37342 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "37342 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 103921,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1078905,
            "unit": "ns/op",
            "extra": "1123 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1123 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1123 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14234567,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349916,
            "unit": "B/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8272593298,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5286619240,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60936912,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 228995351,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139829358,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676195,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 9100464673,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5423310544,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62547182,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 14292,
            "unit": "ns/op",
            "extra": "81242 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7538,
            "unit": "B/op",
            "extra": "81242 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "81242 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 744.5,
            "unit": "ns/op",
            "extra": "1608792 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1608792 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1608792 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 14261,
            "unit": "ns/op",
            "extra": "85471 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7536,
            "unit": "B/op",
            "extra": "85471 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "85471 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas.bichinger@gmail.com",
            "name": "abichinger",
            "username": "abichinger"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d1349af467df69aba9b711525f95fa67f454adc",
          "message": "feat: support map in ABAC (#1341)",
          "timestamp": "2023-11-22T22:28:37+08:00",
          "tree_id": "9e70505929baa0363abb1d7c9603a7628b17ebc4",
          "url": "https://github.com/casbin/casbin/commit/4d1349af467df69aba9b711525f95fa67f454adc"
        },
        "date": 1700663551694,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.55,
            "unit": "ns/op",
            "extra": "68579175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68579175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68579175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 165.3,
            "unit": "ns/op",
            "extra": "7178013 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7178013 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7178013 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 168.9,
            "unit": "ns/op",
            "extra": "7225532 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7225532 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7225532 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 177.5,
            "unit": "ns/op",
            "extra": "6713359 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6713359 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6713359 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 179.7,
            "unit": "ns/op",
            "extra": "6453422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6453422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6453422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 156.6,
            "unit": "ns/op",
            "extra": "7567225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7567225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7567225 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 167.3,
            "unit": "ns/op",
            "extra": "7026795 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7026795 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7026795 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 179.6,
            "unit": "ns/op",
            "extra": "6697161 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6697161 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6697161 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3048,
            "unit": "ns/op",
            "extra": "405250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1544,
            "unit": "B/op",
            "extra": "405250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "405250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 183.9,
            "unit": "ns/op",
            "extra": "6558703 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6558703 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6558703 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "7083243 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7083243 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7083243 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 170.7,
            "unit": "ns/op",
            "extra": "7155726 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7155726 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7155726 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 312.8,
            "unit": "ns/op",
            "extra": "3913465 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3913465 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3913465 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 123.9,
            "unit": "ns/op",
            "extra": "9312331 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9312331 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9312331 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 460.3,
            "unit": "ns/op",
            "extra": "2563434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2563434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2563434 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 499.7,
            "unit": "ns/op",
            "extra": "2412289 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2412289 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2412289 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 509.3,
            "unit": "ns/op",
            "extra": "2283889 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2283889 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2283889 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 467.3,
            "unit": "ns/op",
            "extra": "2497075 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2497075 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2497075 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 627.4,
            "unit": "ns/op",
            "extra": "1893644 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 173,
            "unit": "B/op",
            "extra": "1893644 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1893644 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1278,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 481.4,
            "unit": "ns/op",
            "extra": "2435642 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2435642 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2435642 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 537.3,
            "unit": "ns/op",
            "extra": "2078085 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2078085 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2078085 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1243,
            "unit": "ns/op",
            "extra": "909835 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 289,
            "unit": "B/op",
            "extra": "909835 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "909835 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.53,
            "unit": "ns/op",
            "extra": "68283789 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68283789 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68283789 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3706,
            "unit": "ns/op",
            "extra": "319362 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1510,
            "unit": "B/op",
            "extra": "319362 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "319362 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5613,
            "unit": "ns/op",
            "extra": "204068 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2070,
            "unit": "B/op",
            "extra": "204068 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "204068 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 49082,
            "unit": "ns/op",
            "extra": "24448 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20214,
            "unit": "B/op",
            "extra": "24448 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24448 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 516834,
            "unit": "ns/op",
            "extra": "2302 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191758,
            "unit": "B/op",
            "extra": "2302 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "2302 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5709390,
            "unit": "ns/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899742,
            "unit": "B/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48170,
            "unit": "allocs/op",
            "extra": "206 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 61393,
            "unit": "ns/op",
            "extra": "20503 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20339,
            "unit": "B/op",
            "extra": "20503 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20503 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 579667,
            "unit": "ns/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194721,
            "unit": "B/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6169723,
            "unit": "ns/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941098,
            "unit": "B/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60621,
            "unit": "allocs/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4716,
            "unit": "ns/op",
            "extra": "234087 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1847,
            "unit": "B/op",
            "extra": "234087 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "234087 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5296,
            "unit": "ns/op",
            "extra": "229510 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1828,
            "unit": "B/op",
            "extra": "229510 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "229510 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2876,
            "unit": "ns/op",
            "extra": "398354 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1536,
            "unit": "B/op",
            "extra": "398354 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "398354 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3977634,
            "unit": "ns/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1327819,
            "unit": "B/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "279 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6287,
            "unit": "ns/op",
            "extra": "190077 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3072,
            "unit": "B/op",
            "extra": "190077 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "190077 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7103,
            "unit": "ns/op",
            "extra": "171122 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2484,
            "unit": "B/op",
            "extra": "171122 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "171122 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4310,
            "unit": "ns/op",
            "extra": "278517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1765,
            "unit": "B/op",
            "extra": "278517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "278517 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 24622,
            "unit": "ns/op",
            "extra": "48446 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16756,
            "unit": "B/op",
            "extra": "48446 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "48446 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70429,
            "unit": "ns/op",
            "extra": "16873 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "16873 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "16873 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 755138,
            "unit": "ns/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1502 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 9329911,
            "unit": "ns/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349925,
            "unit": "B/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6212283114,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5348304072,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60949962,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 169952935,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141455876,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676533,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6435645526,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5483027224,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559972,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10668,
            "unit": "ns/op",
            "extra": "111933 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7603,
            "unit": "B/op",
            "extra": "111933 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "111933 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 497.3,
            "unit": "ns/op",
            "extra": "2412577 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2412577 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2412577 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10322,
            "unit": "ns/op",
            "extra": "116103 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7612,
            "unit": "B/op",
            "extra": "116103 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "116103 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas.bichinger@gmail.com",
            "name": "abichinger",
            "username": "abichinger"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6703d2f87e113696f2f613cde1597fcec6afcf31",
          "message": "feat: support all types for JSON request in ABAC (#1343)",
          "timestamp": "2023-11-24T15:55:12+08:00",
          "tree_id": "00445c0aed43f07194a3cfcda2f01365771e009a",
          "url": "https://github.com/casbin/casbin/commit/6703d2f87e113696f2f613cde1597fcec6afcf31"
        },
        "date": 1700812744962,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "67611552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67611552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67611552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 165.6,
            "unit": "ns/op",
            "extra": "7238414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7238414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7238414 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 161.6,
            "unit": "ns/op",
            "extra": "7326025 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7326025 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7326025 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 176.6,
            "unit": "ns/op",
            "extra": "6684844 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6684844 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6684844 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 188.1,
            "unit": "ns/op",
            "extra": "6552250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6552250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6552250 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 156.4,
            "unit": "ns/op",
            "extra": "7161288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7161288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7161288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 163.9,
            "unit": "ns/op",
            "extra": "7165737 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7165737 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7165737 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 178.4,
            "unit": "ns/op",
            "extra": "6925257 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6925257 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6925257 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2979,
            "unit": "ns/op",
            "extra": "402350 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1538,
            "unit": "B/op",
            "extra": "402350 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "402350 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "6712842 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6712842 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6712842 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 168.8,
            "unit": "ns/op",
            "extra": "7382127 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7382127 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7382127 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 162.5,
            "unit": "ns/op",
            "extra": "7227288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7227288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7227288 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 295.5,
            "unit": "ns/op",
            "extra": "4021153 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4021153 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4021153 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 121.7,
            "unit": "ns/op",
            "extra": "9387387 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9387387 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9387387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 444.1,
            "unit": "ns/op",
            "extra": "2613012 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2613012 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2613012 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 483.9,
            "unit": "ns/op",
            "extra": "2487177 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2487177 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2487177 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 503.8,
            "unit": "ns/op",
            "extra": "2372656 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2372656 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2372656 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 488.2,
            "unit": "ns/op",
            "extra": "2542335 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2542335 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2542335 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 563.3,
            "unit": "ns/op",
            "extra": "1984675 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 173,
            "unit": "B/op",
            "extra": "1984675 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1984675 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1218,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 488.5,
            "unit": "ns/op",
            "extra": "2426599 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2426599 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2426599 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 554.2,
            "unit": "ns/op",
            "extra": "2088661 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2088661 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2088661 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1212,
            "unit": "ns/op",
            "extra": "936991 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 291,
            "unit": "B/op",
            "extra": "936991 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "936991 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.68,
            "unit": "ns/op",
            "extra": "67971577 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67971577 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67971577 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3719,
            "unit": "ns/op",
            "extra": "318211 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1508,
            "unit": "B/op",
            "extra": "318211 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "318211 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5489,
            "unit": "ns/op",
            "extra": "218457 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2065,
            "unit": "B/op",
            "extra": "218457 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "218457 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 49969,
            "unit": "ns/op",
            "extra": "24324 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20271,
            "unit": "B/op",
            "extra": "24324 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24324 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 511984,
            "unit": "ns/op",
            "extra": "2334 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191257,
            "unit": "B/op",
            "extra": "2334 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2334 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5195604,
            "unit": "ns/op",
            "extra": "228 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1906391,
            "unit": "B/op",
            "extra": "228 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48353,
            "unit": "allocs/op",
            "extra": "228 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 59230,
            "unit": "ns/op",
            "extra": "20817 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20352,
            "unit": "B/op",
            "extra": "20817 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20817 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 576178,
            "unit": "ns/op",
            "extra": "1974 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194638,
            "unit": "B/op",
            "extra": "1974 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1974 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6073531,
            "unit": "ns/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940496,
            "unit": "B/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60599,
            "unit": "allocs/op",
            "extra": "189 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4605,
            "unit": "ns/op",
            "extra": "245305 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1846,
            "unit": "B/op",
            "extra": "245305 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "245305 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5123,
            "unit": "ns/op",
            "extra": "232502 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1824,
            "unit": "B/op",
            "extra": "232502 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "232502 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2858,
            "unit": "ns/op",
            "extra": "410043 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1536,
            "unit": "B/op",
            "extra": "410043 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "410043 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3982954,
            "unit": "ns/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1330745,
            "unit": "B/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "301 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6212,
            "unit": "ns/op",
            "extra": "195597 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3064,
            "unit": "B/op",
            "extra": "195597 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "195597 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6982,
            "unit": "ns/op",
            "extra": "167911 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2483,
            "unit": "B/op",
            "extra": "167911 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "167911 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4241,
            "unit": "ns/op",
            "extra": "282517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1759,
            "unit": "B/op",
            "extra": "282517 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "282517 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23818,
            "unit": "ns/op",
            "extra": "50733 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16762,
            "unit": "B/op",
            "extra": "50733 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "50733 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69717,
            "unit": "ns/op",
            "extra": "16981 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "16981 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "16981 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 741601,
            "unit": "ns/op",
            "extra": "1556 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1556 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1556 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8214236,
            "unit": "ns/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349923,
            "unit": "B/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6040649458,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5350679168,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60950665,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 163583356,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141030638,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676469,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6200676971,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5472251672,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62557899,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 11049,
            "unit": "ns/op",
            "extra": "107535 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7599,
            "unit": "B/op",
            "extra": "107535 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "107535 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 498.3,
            "unit": "ns/op",
            "extra": "2390200 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2390200 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2390200 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10253,
            "unit": "ns/op",
            "extra": "114261 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7602,
            "unit": "B/op",
            "extra": "114261 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114261 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53203743+yesgs@users.noreply.github.com",
            "name": "yesgs",
            "username": "yesgs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "953c551d15c8f64bbe2149d23c3cf5fd3b12fa7f",
          "message": "feat: fix concurrent map writes issue in getCachedResult() (#1348)\n\nCo-authored-by: king <yewei@myhayo.com>",
          "timestamp": "2023-12-18T20:46:57+08:00",
          "tree_id": "a0168762b1cd5571b4b176f5548e4f1c80d7d97a",
          "url": "https://github.com/casbin/casbin/commit/953c551d15c8f64bbe2149d23c3cf5fd3b12fa7f"
        },
        "date": 1702903842154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.51,
            "unit": "ns/op",
            "extra": "68693788 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68693788 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68693788 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 165.8,
            "unit": "ns/op",
            "extra": "7237262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7237262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7237262 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 165.6,
            "unit": "ns/op",
            "extra": "7150753 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7150753 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7150753 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 175.9,
            "unit": "ns/op",
            "extra": "6729321 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6729321 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6729321 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 181.8,
            "unit": "ns/op",
            "extra": "6266538 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6266538 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6266538 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 166.6,
            "unit": "ns/op",
            "extra": "6437374 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "6437374 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6437374 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 165.9,
            "unit": "ns/op",
            "extra": "6686418 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6686418 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6686418 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 175,
            "unit": "ns/op",
            "extra": "6806461 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6806461 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6806461 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2905,
            "unit": "ns/op",
            "extra": "400566 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1541,
            "unit": "B/op",
            "extra": "400566 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "400566 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 182.5,
            "unit": "ns/op",
            "extra": "6585764 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6585764 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6585764 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 166.7,
            "unit": "ns/op",
            "extra": "7123388 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7123388 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7123388 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 170,
            "unit": "ns/op",
            "extra": "7181338 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7181338 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7181338 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 307.7,
            "unit": "ns/op",
            "extra": "3898142 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3898142 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3898142 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 167.4,
            "unit": "ns/op",
            "extra": "6860012 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6860012 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6860012 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 449.3,
            "unit": "ns/op",
            "extra": "2572891 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2572891 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2572891 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 480.6,
            "unit": "ns/op",
            "extra": "2529717 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2529717 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2529717 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 502.2,
            "unit": "ns/op",
            "extra": "2388861 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2388861 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2388861 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 473.5,
            "unit": "ns/op",
            "extra": "2473608 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2473608 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2473608 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 549.4,
            "unit": "ns/op",
            "extra": "2124936 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2124936 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2124936 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1116,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 503.9,
            "unit": "ns/op",
            "extra": "2372836 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2372836 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2372836 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 556,
            "unit": "ns/op",
            "extra": "2000983 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2000983 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2000983 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1257,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 283,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.51,
            "unit": "ns/op",
            "extra": "68162562 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68162562 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68162562 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3636,
            "unit": "ns/op",
            "extra": "310822 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1506,
            "unit": "B/op",
            "extra": "310822 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "310822 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5494,
            "unit": "ns/op",
            "extra": "210219 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2062,
            "unit": "B/op",
            "extra": "210219 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "210219 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 47369,
            "unit": "ns/op",
            "extra": "25375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20170,
            "unit": "B/op",
            "extra": "25375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25375 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 496395,
            "unit": "ns/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191741,
            "unit": "B/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "2402 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5279219,
            "unit": "ns/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901542,
            "unit": "B/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48213,
            "unit": "allocs/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 57717,
            "unit": "ns/op",
            "extra": "21084 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20291,
            "unit": "B/op",
            "extra": "21084 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "21084 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 571714,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194685,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6045148,
            "unit": "ns/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941339,
            "unit": "B/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60608,
            "unit": "allocs/op",
            "extra": "186 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4590,
            "unit": "ns/op",
            "extra": "243289 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1843,
            "unit": "B/op",
            "extra": "243289 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "243289 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5139,
            "unit": "ns/op",
            "extra": "227433 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1822,
            "unit": "B/op",
            "extra": "227433 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "227433 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2834,
            "unit": "ns/op",
            "extra": "412984 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1531,
            "unit": "B/op",
            "extra": "412984 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "412984 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3890511,
            "unit": "ns/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1320609,
            "unit": "B/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "304 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6130,
            "unit": "ns/op",
            "extra": "194821 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3064,
            "unit": "B/op",
            "extra": "194821 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "194821 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 7000,
            "unit": "ns/op",
            "extra": "168266 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2474,
            "unit": "B/op",
            "extra": "168266 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "168266 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4200,
            "unit": "ns/op",
            "extra": "280035 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1757,
            "unit": "B/op",
            "extra": "280035 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "280035 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 22991,
            "unit": "ns/op",
            "extra": "51943 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16705,
            "unit": "B/op",
            "extra": "51943 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51943 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69768,
            "unit": "ns/op",
            "extra": "17228 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11954,
            "unit": "B/op",
            "extra": "17228 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17228 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 736714,
            "unit": "ns/op",
            "extra": "1603 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "1603 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1603 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8285580,
            "unit": "ns/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5937835409,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5335847336,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60947073,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 160150213,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141139862,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676456,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6130166912,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5473784224,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62557797,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10376,
            "unit": "ns/op",
            "extra": "117518 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7599,
            "unit": "B/op",
            "extra": "117518 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "117518 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 485.6,
            "unit": "ns/op",
            "extra": "2455596 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2455596 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2455596 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10113,
            "unit": "ns/op",
            "extra": "117328 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7604,
            "unit": "B/op",
            "extra": "117328 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "117328 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85475922+nomeguy@users.noreply.github.com",
            "name": "Gucheng",
            "username": "nomeguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96826309249a07afbdaa8829097ecdc3ea690caf",
          "message": "Update README.md",
          "timestamp": "2023-12-20T01:50:47+08:00",
          "tree_id": "b1d8be853b9632b288c8553f921f9dfb05a90b0f",
          "url": "https://github.com/casbin/casbin/commit/96826309249a07afbdaa8829097ecdc3ea690caf"
        },
        "date": 1703008466838,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.55,
            "unit": "ns/op",
            "extra": "67574883 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67574883 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67574883 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 166.5,
            "unit": "ns/op",
            "extra": "7333520 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7333520 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7333520 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 164.9,
            "unit": "ns/op",
            "extra": "7180180 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7180180 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7180180 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 174.9,
            "unit": "ns/op",
            "extra": "6785896 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6785896 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6785896 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 178,
            "unit": "ns/op",
            "extra": "6644001 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6644001 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6644001 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 161.8,
            "unit": "ns/op",
            "extra": "7046524 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7046524 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7046524 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 162.6,
            "unit": "ns/op",
            "extra": "6930697 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6930697 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6930697 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 177.1,
            "unit": "ns/op",
            "extra": "6843865 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6843865 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6843865 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2850,
            "unit": "ns/op",
            "extra": "394623 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1536,
            "unit": "B/op",
            "extra": "394623 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "394623 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 178.9,
            "unit": "ns/op",
            "extra": "6642976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6642976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6642976 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "7308463 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7308463 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7308463 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 170.4,
            "unit": "ns/op",
            "extra": "7252323 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7252323 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7252323 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 304.5,
            "unit": "ns/op",
            "extra": "3968625 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3968625 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3968625 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 169.8,
            "unit": "ns/op",
            "extra": "6568860 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6568860 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6568860 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 438.2,
            "unit": "ns/op",
            "extra": "2722563 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2722563 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2722563 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 469.4,
            "unit": "ns/op",
            "extra": "2517428 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2517428 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2517428 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 511.8,
            "unit": "ns/op",
            "extra": "2402472 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2402472 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2402472 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 471.5,
            "unit": "ns/op",
            "extra": "2508895 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2508895 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2508895 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 536.2,
            "unit": "ns/op",
            "extra": "2080178 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2080178 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2080178 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1157,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 491.2,
            "unit": "ns/op",
            "extra": "2372792 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2372792 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2372792 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 531,
            "unit": "ns/op",
            "extra": "2059441 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2059441 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2059441 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1330,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 295,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.61,
            "unit": "ns/op",
            "extra": "67699882 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67699882 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67699882 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3633,
            "unit": "ns/op",
            "extra": "323822 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1501,
            "unit": "B/op",
            "extra": "323822 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "323822 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5434,
            "unit": "ns/op",
            "extra": "217555 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2051,
            "unit": "B/op",
            "extra": "217555 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "217555 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 46628,
            "unit": "ns/op",
            "extra": "25664 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20092,
            "unit": "B/op",
            "extra": "25664 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "25664 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 483379,
            "unit": "ns/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191219,
            "unit": "B/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2476 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5200851,
            "unit": "ns/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901769,
            "unit": "B/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48228,
            "unit": "allocs/op",
            "extra": "222 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 57585,
            "unit": "ns/op",
            "extra": "21091 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20178,
            "unit": "B/op",
            "extra": "21091 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "21091 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 567656,
            "unit": "ns/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194030,
            "unit": "B/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6142903,
            "unit": "ns/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1940030,
            "unit": "B/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60602,
            "unit": "allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4549,
            "unit": "ns/op",
            "extra": "244941 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1835,
            "unit": "B/op",
            "extra": "244941 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "244941 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5068,
            "unit": "ns/op",
            "extra": "226946 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1817,
            "unit": "B/op",
            "extra": "226946 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "226946 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2826,
            "unit": "ns/op",
            "extra": "419342 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1527,
            "unit": "B/op",
            "extra": "419342 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "419342 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3870260,
            "unit": "ns/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1313453,
            "unit": "B/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40089,
            "unit": "allocs/op",
            "extra": "308 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6030,
            "unit": "ns/op",
            "extra": "199053 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3045,
            "unit": "B/op",
            "extra": "199053 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "199053 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6839,
            "unit": "ns/op",
            "extra": "173752 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2463,
            "unit": "B/op",
            "extra": "173752 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "173752 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4241,
            "unit": "ns/op",
            "extra": "279456 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1752,
            "unit": "B/op",
            "extra": "279456 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "279456 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 22943,
            "unit": "ns/op",
            "extra": "51954 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16702,
            "unit": "B/op",
            "extra": "51954 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "51954 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 69246,
            "unit": "ns/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11954,
            "unit": "B/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 730483,
            "unit": "ns/op",
            "extra": "1537 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1537 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1537 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8442428,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 5651609100,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5320382720,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60943703,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 157609263,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 140639131,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676364,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 5848098355,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5460752040,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62554788,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 9873,
            "unit": "ns/op",
            "extra": "121269 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7589,
            "unit": "B/op",
            "extra": "121269 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "121269 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 488.6,
            "unit": "ns/op",
            "extra": "2454387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2454387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2454387 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 9850,
            "unit": "ns/op",
            "extra": "118572 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7584,
            "unit": "B/op",
            "extra": "118572 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "118572 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "72999113+bartventer@users.noreply.github.com",
            "name": "Bart Venter",
            "username": "bartventer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c66aada23606abd050caa4587f50a14f56c18022",
          "message": "feat: update IEnforcer for missing domain methods (#1350)",
          "timestamp": "2023-12-31T18:32:49+08:00",
          "tree_id": "6c8f25bc648a9f9bfc3a3f7428d1012fb8de8076",
          "url": "https://github.com/casbin/casbin/commit/c66aada23606abd050caa4587f50a14f56c18022"
        },
        "date": 1704019006453,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.57,
            "unit": "ns/op",
            "extra": "67767902 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67767902 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67767902 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 160.8,
            "unit": "ns/op",
            "extra": "7574654 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7574654 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7574654 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 157.9,
            "unit": "ns/op",
            "extra": "7531116 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7531116 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7531116 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 177.8,
            "unit": "ns/op",
            "extra": "6723175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6723175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6723175 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "6632856 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6632856 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6632856 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 156.4,
            "unit": "ns/op",
            "extra": "7116148 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7116148 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7116148 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "7422502 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7422502 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7422502 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 167.2,
            "unit": "ns/op",
            "extra": "7132581 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "7132581 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7132581 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2836,
            "unit": "ns/op",
            "extra": "403797 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "403797 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "403797 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 170.9,
            "unit": "ns/op",
            "extra": "7002967 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "7002967 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7002967 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 158.8,
            "unit": "ns/op",
            "extra": "7525413 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7525413 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7525413 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 158.1,
            "unit": "ns/op",
            "extra": "7473894 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7473894 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7473894 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 288.9,
            "unit": "ns/op",
            "extra": "4146798 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4146798 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4146798 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 173.6,
            "unit": "ns/op",
            "extra": "6878982 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6878982 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6878982 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 437.7,
            "unit": "ns/op",
            "extra": "2716092 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2716092 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2716092 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 472.9,
            "unit": "ns/op",
            "extra": "2528782 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2528782 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2528782 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 518,
            "unit": "ns/op",
            "extra": "2320293 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2320293 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2320293 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 470,
            "unit": "ns/op",
            "extra": "2561440 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2561440 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2561440 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 552,
            "unit": "ns/op",
            "extra": "2080015 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2080015 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2080015 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1153,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 483.8,
            "unit": "ns/op",
            "extra": "2458155 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2458155 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2458155 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 547.2,
            "unit": "ns/op",
            "extra": "2081018 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2081018 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2081018 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1212,
            "unit": "ns/op",
            "extra": "986968 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 292,
            "unit": "B/op",
            "extra": "986968 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "986968 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.53,
            "unit": "ns/op",
            "extra": "68728171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68728171 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68728171 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3742,
            "unit": "ns/op",
            "extra": "315896 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1504,
            "unit": "B/op",
            "extra": "315896 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "315896 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5386,
            "unit": "ns/op",
            "extra": "217143 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2057,
            "unit": "B/op",
            "extra": "217143 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "217143 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 48505,
            "unit": "ns/op",
            "extra": "24729 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20297,
            "unit": "B/op",
            "extra": "24729 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24729 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 501473,
            "unit": "ns/op",
            "extra": "2404 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191420,
            "unit": "B/op",
            "extra": "2404 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "2404 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5190166,
            "unit": "ns/op",
            "extra": "230 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901599,
            "unit": "B/op",
            "extra": "230 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48224,
            "unit": "allocs/op",
            "extra": "230 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 58162,
            "unit": "ns/op",
            "extra": "20368 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20366,
            "unit": "B/op",
            "extra": "20368 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20368 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 582623,
            "unit": "ns/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194743,
            "unit": "B/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6021,
            "unit": "allocs/op",
            "extra": "1872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6170059,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1941830,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60649,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4531,
            "unit": "ns/op",
            "extra": "243376 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1840,
            "unit": "B/op",
            "extra": "243376 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "243376 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5083,
            "unit": "ns/op",
            "extra": "233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1817,
            "unit": "B/op",
            "extra": "233454 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "233454 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2772,
            "unit": "ns/op",
            "extra": "425805 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1529,
            "unit": "B/op",
            "extra": "425805 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "425805 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3915413,
            "unit": "ns/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1324462,
            "unit": "B/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40091,
            "unit": "allocs/op",
            "extra": "307 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6076,
            "unit": "ns/op",
            "extra": "197028 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3055,
            "unit": "B/op",
            "extra": "197028 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "197028 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6911,
            "unit": "ns/op",
            "extra": "174126 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2469,
            "unit": "B/op",
            "extra": "174126 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "174126 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4208,
            "unit": "ns/op",
            "extra": "282536 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1757,
            "unit": "B/op",
            "extra": "282536 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "282536 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23776,
            "unit": "ns/op",
            "extra": "49758 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16737,
            "unit": "B/op",
            "extra": "49758 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "49758 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70117,
            "unit": "ns/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17130 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 739209,
            "unit": "ns/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1665 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8325910,
            "unit": "ns/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349922,
            "unit": "B/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6208020408,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5338626584,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948713,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 173437397,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141442892,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676552,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6578074404,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5488807368,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62562036,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10664,
            "unit": "ns/op",
            "extra": "114082 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7611,
            "unit": "B/op",
            "extra": "114082 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "114082 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 496.2,
            "unit": "ns/op",
            "extra": "2422408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2422408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2422408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10684,
            "unit": "ns/op",
            "extra": "110230 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7615,
            "unit": "B/op",
            "extra": "110230 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "110230 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cococolanosugar@gmail.com",
            "name": "George",
            "username": "cococolanosugar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71c8c84e300cf8b276f28e21e555a39ad793d65c",
          "message": "feat: CachedEnforcer does not clean the result cached in memory when call ClearPolicy method (#1413)\n\n* fix: CachedEnforcer does not clean the result cached in memory when call ClearPolicy method\r\n\r\n* fix: remove redundant return statement",
          "timestamp": "2024-06-17T11:44:19+08:00",
          "tree_id": "bb78c5c1c2cadcf8e589e8264bf8bf29561c5bce",
          "url": "https://github.com/vbegin/casbin/commit/71c8c84e300cf8b276f28e21e555a39ad793d65c"
        },
        "date": 1720664284571,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 18.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "131923194 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 18.19,
            "unit": "ns/op",
            "extra": "131923194 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "131923194 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "131923194 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 172.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13854828 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 172.5,
            "unit": "ns/op",
            "extra": "13854828 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13854828 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13854828 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 173.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13794681 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 173.1,
            "unit": "ns/op",
            "extra": "13794681 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13794681 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13794681 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 179.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13072664 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 179.2,
            "unit": "ns/op",
            "extra": "13072664 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13072664 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13072664 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 184.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12723835 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 184.9,
            "unit": "ns/op",
            "extra": "12723835 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12723835 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12723835 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 165.1,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "14589740 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 165.1,
            "unit": "ns/op",
            "extra": "14589740 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "14589740 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "14589740 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 178.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13555336 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 178.1,
            "unit": "ns/op",
            "extra": "13555336 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13555336 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13555336 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 184.4,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "13016353 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 184.4,
            "unit": "ns/op",
            "extra": "13016353 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "13016353 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13016353 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2877,
            "unit": "ns/op\t    1545 B/op\t      18 allocs/op",
            "extra": "816504 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2877,
            "unit": "ns/op",
            "extra": "816504 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1545,
            "unit": "B/op",
            "extra": "816504 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "816504 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 192.9,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "12341137 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 192.9,
            "unit": "ns/op",
            "extra": "12341137 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "12341137 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12341137 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 175.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13367857 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 175.4,
            "unit": "ns/op",
            "extra": "13367857 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13367857 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13367857 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 174.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13582081 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 174.7,
            "unit": "ns/op",
            "extra": "13582081 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13582081 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13582081 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 297.1,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "8068224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 297.1,
            "unit": "ns/op",
            "extra": "8068224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "8068224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "8068224 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 167.5,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "14021155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 167.5,
            "unit": "ns/op",
            "extra": "14021155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "14021155 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14021155 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 486.4,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "4750791 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 486.4,
            "unit": "ns/op",
            "extra": "4750791 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "4750791 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4750791 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 557.3,
            "unit": "ns/op\t     158 B/op\t       6 allocs/op",
            "extra": "4444534 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 557.3,
            "unit": "ns/op",
            "extra": "4444534 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 158,
            "unit": "B/op",
            "extra": "4444534 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4444534 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 580.5,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "3915494 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 580.5,
            "unit": "ns/op",
            "extra": "3915494 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "3915494 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3915494 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 529.9,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "4386900 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 529.9,
            "unit": "ns/op",
            "extra": "4386900 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4386900 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4386900 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 645.7,
            "unit": "ns/op\t     168 B/op\t       7 allocs/op",
            "extra": "3719220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 645.7,
            "unit": "ns/op",
            "extra": "3719220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "3719220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3719220 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1237,
            "unit": "ns/op\t     468 B/op\t       9 allocs/op",
            "extra": "1991067 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1237,
            "unit": "ns/op",
            "extra": "1991067 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 468,
            "unit": "B/op",
            "extra": "1991067 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1991067 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 522.9,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "4701914 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 522.9,
            "unit": "ns/op",
            "extra": "4701914 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "4701914 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4701914 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 563.1,
            "unit": "ns/op\t     175 B/op\t       7 allocs/op",
            "extra": "3814270 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 563.1,
            "unit": "ns/op",
            "extra": "3814270 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 175,
            "unit": "B/op",
            "extra": "3814270 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3814270 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1227,
            "unit": "ns/op\t     287 B/op\t      13 allocs/op",
            "extra": "1662762 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1227,
            "unit": "ns/op",
            "extra": "1662762 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 287,
            "unit": "B/op",
            "extra": "1662762 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1662762 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 18.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "131942910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 18.21,
            "unit": "ns/op",
            "extra": "131942910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "131942910 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "131942910 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3595,
            "unit": "ns/op\t    1510 B/op\t      17 allocs/op",
            "extra": "646383 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3595,
            "unit": "ns/op",
            "extra": "646383 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1510,
            "unit": "B/op",
            "extra": "646383 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "646383 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5359,
            "unit": "ns/op\t    2065 B/op\t      35 allocs/op",
            "extra": "443314 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5359,
            "unit": "ns/op",
            "extra": "443314 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2065,
            "unit": "B/op",
            "extra": "443314 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "443314 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 49526,
            "unit": "ns/op\t   20320 B/op\t     480 allocs/op",
            "extra": "49102 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 49526,
            "unit": "ns/op",
            "extra": "49102 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20320,
            "unit": "B/op",
            "extra": "49102 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "49102 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 506276,
            "unit": "ns/op\t  191768 B/op\t    4829 allocs/op",
            "extra": "4783 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 506276,
            "unit": "ns/op",
            "extra": "4783 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191768,
            "unit": "B/op",
            "extra": "4783 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4829,
            "unit": "allocs/op",
            "extra": "4783 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5294676,
            "unit": "ns/op\t 1898544 B/op\t   48145 allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5294676,
            "unit": "ns/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1898544,
            "unit": "B/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48145,
            "unit": "allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 59630,
            "unit": "ns/op\t   20390 B/op\t     615 allocs/op",
            "extra": "39805 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 59630,
            "unit": "ns/op",
            "extra": "39805 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20390,
            "unit": "B/op",
            "extra": "39805 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "39805 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 577552,
            "unit": "ns/op\t  194653 B/op\t    6018 allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 577552,
            "unit": "ns/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194653,
            "unit": "B/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6018,
            "unit": "allocs/op",
            "extra": "3872 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 5910914,
            "unit": "ns/op\t 1932809 B/op\t   60310 allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 5910914,
            "unit": "ns/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1932809,
            "unit": "B/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60310,
            "unit": "allocs/op",
            "extra": "374 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5304,
            "unit": "ns/op\t    2737 B/op\t      28 allocs/op",
            "extra": "417568 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5304,
            "unit": "ns/op",
            "extra": "417568 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 2737,
            "unit": "B/op",
            "extra": "417568 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "417568 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 5067,
            "unit": "ns/op\t    1828 B/op\t      25 allocs/op",
            "extra": "474704 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5067,
            "unit": "ns/op",
            "extra": "474704 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1828,
            "unit": "B/op",
            "extra": "474704 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "474704 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2791,
            "unit": "ns/op\t    1535 B/op\t      17 allocs/op",
            "extra": "841681 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2791,
            "unit": "ns/op",
            "extra": "841681 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "841681 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "841681 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 3985567,
            "unit": "ns/op\t 1327517 B/op\t   40092 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3985567,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1327517,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6110,
            "unit": "ns/op\t    3069 B/op\t      37 allocs/op",
            "extra": "392058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6110,
            "unit": "ns/op",
            "extra": "392058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3069,
            "unit": "B/op",
            "extra": "392058 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "392058 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 6844,
            "unit": "ns/op\t    2482 B/op\t      49 allocs/op",
            "extra": "351280 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6844,
            "unit": "ns/op",
            "extra": "351280 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2482,
            "unit": "B/op",
            "extra": "351280 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "351280 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4156,
            "unit": "ns/op\t    1764 B/op\t      22 allocs/op",
            "extra": "574552 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4156,
            "unit": "ns/op",
            "extra": "574552 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1764,
            "unit": "B/op",
            "extra": "574552 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "574552 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 23293,
            "unit": "ns/op\t   16721 B/op\t     164 allocs/op",
            "extra": "105884 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23293,
            "unit": "ns/op",
            "extra": "105884 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16721,
            "unit": "B/op",
            "extra": "105884 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "105884 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 70235,
            "unit": "ns/op\t   11955 B/op\t     797 allocs/op",
            "extra": "31670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70235,
            "unit": "ns/op",
            "extra": "31670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "31670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "31670 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 736562,
            "unit": "ns/op\t  125915 B/op\t    8741 allocs/op",
            "extra": "3075 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 736562,
            "unit": "ns/op",
            "extra": "3075 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "3075 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "3075 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 8013713,
            "unit": "ns/op\t 1349920 B/op\t   89741 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8013713,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349920,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 6013871883,
            "unit": "ns/op\t5342684984 B/op\t60948768 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6013871883,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5342684984,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948768,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 162168401,
            "unit": "ns/op\t141592898 B/op\t 1676498 allocs/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 162168401,
            "unit": "ns/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141592898,
            "unit": "B/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676498,
            "unit": "allocs/op",
            "extra": "14 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 6135763024,
            "unit": "ns/op\t5482675256 B/op\t62559662 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6135763024,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5482675256,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559662,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 10069,
            "unit": "ns/op\t    7604 B/op\t     111 allocs/op",
            "extra": "240859 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10069,
            "unit": "ns/op",
            "extra": "240859 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7604,
            "unit": "B/op",
            "extra": "240859 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "240859 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 483.5,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "4939106 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 483.5,
            "unit": "ns/op",
            "extra": "4939106 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "4939106 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4939106 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 10053,
            "unit": "ns/op\t    7604 B/op\t     111 allocs/op",
            "extra": "235964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10053,
            "unit": "ns/op",
            "extra": "235964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7604,
            "unit": "B/op",
            "extra": "235964 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "235964 times\n4 procs"
          }
        ]
      }
    ]
  }
}