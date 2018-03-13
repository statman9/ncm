module.exports = {
    sites: [
        {
            "url": "http://localhost:8081",
            "site_name": "Nodeify",
            "permissions": {
                "admins": [
                    "statman9"
                ],
                "editors": [
    
                ]
            },
            "content": [
                {
                    "page": "home",
                    "url": "/",
                    "content_areas": [
                        {
                            "id": "content1",
                            "content": "<h1>Home</h1>"
                        }, {
                            "id": "content2",
                            "content": "<h2>Home Content</h2>"
                        }
                    ]
                }
            ],
            "navigation": [
                {
                    "name": "Main",
                    "items": [
                        {
                            "title": "Home",
                            "display_order": 1,
                            "menu_type": "Link",
                            "link": "/",
                            "mega_menu_content": ""
                        }
                    ]
                }
            ],
            "files": [
                {
                    "file_name": "",
                    "ext": "",
                    "created_date": ""
                }
            ]
        }
    ]
};