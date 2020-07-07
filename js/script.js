new Vue({
    el: '#app',
    data: {
        products: [
            {
            id: 1586934917210,
            unit: '件',
            category: '服飾',
            title: '女性流行時尚T-shirt',
            origin_price: 1200,
            price: 1050,
            description: '天絲結合了人造纖維與天然纖維的優點，兼具韌性與舒適性',
            content: '材質： 嫘縈(天絲)65%、聚酯纖維(全聚酯涼感纖維)35% ',
            is_enabled: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
            },
            {
            id: 1196934917910,
            unit: '件',
            category: '服飾',
            title: '休閒短袖T恤',
            origin_price: 1300,
            price: 1120,
            description: '天絲具高吸濕率，吸濕率比棉更多了50%，讓肌膚隨時保持乾爽！',
            content: '材質： 嫘縈(天絲)65%、聚酯纖維(全聚酯涼感纖維)35% ',
            is_enabled: 0,
            imageUrl: 'https://images.unsplash.com/photo-1544274270-3e0f956a2556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1837&q=80',
            },
        ],
        tempProduct: {
            imageUrl: [],
        },
    },
    methods: {
            // 新增
            updateProduct() {
                if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                    this.products[i] = this.tempProduct;
                    }
                });
                } else {
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
                }
                this.tempProduct = {};
                $('#productModal').modal('hide');
            },
            // 開啟modal
            openModal(isNew, item) {
                switch (isNew) {
                case 'new':
                    this.tempProduct = {
                    imageUrl: [],
                    };
                    this.isNew = true;
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    this.isNew = false;
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
                }
            },
            // 刪除
            delProduct() {
                if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                    this.products.splice(i, 1);
                    this.tempProduct = {};
                    }
                });
                }
                $('#delProductModal').modal('hide');
            },
    },
});