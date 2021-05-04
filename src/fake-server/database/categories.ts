// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import {
    IBaseCategory,
    IBlogCategory,
    ICategory,
    IShopCategory,
} from '~/interfaces/category';

const getNextId = makeIdGenerator();

function makeShopCategory(def: ICategoryDef, parent: IShopCategory | null): IShopCategory {
    return {
        id: getNextId(),
        type: 'shop',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        layout: def.layout ? def.layout : 'products',
        customFields: {},
    };
}

function makeBlogCategory(def: ICategoryDef, parent: IBlogCategory | null): IBlogCategory {
    return {
        id: getNextId(),
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends IBaseCategory>(
    makeFn: (def: ICategoryDef, parent: T | null) => T,
    defs: ICategoryDef[],
    parent: T | null = null,
): T[] {
    const categories: T[] = [];

    defs.forEach((def) => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

function flatTree<T extends ICategory>(categories: T[]): T[] {
    let result: T[] = [];

    categories.forEach((category) => {
        result = [...result, category, ...flatTree(category.children as T[])];
    });

    return result;
}

const shopCategoriesDef: ICategoryDef[] = [
    {
        name: 'Headlights & Lighting',
		nameA:'',
        slug: 'headlights-lighting',
        image: '/images/categories/category-1.jpg',
        items: 131,
        children: [
            { name: 'Turn Signals',nameA:'إشارات الانعطاف', slug: 'turn-signals' },
            { name: 'Fog Lights',nameA:'مصابيح الضباب',  slug: 'fog-lights' },
            { name: 'Headlights',nameA:'المصباح',  slug: 'headlights' },
            { name: 'Switches & Relays',nameA:'مفاتيح ومرحلات',  slug: 'switches-relays' },
            { name: 'Tail Lights',nameA:'إضاءة خلفية', slug: 'tail-lights' },
            { name: 'Corner Lights',nameA:'أضواء الزاوية',  slug: 'corner-lights' },
            { name: 'Off-Road Lighting',nameA:'إضاءة الطرق الوعرة',  slug: 'off-road-lighting' },
            { name: 'Lighting Accessories',nameA:'ملحقات الإضاءة',  slug: 'lighting-accessories' },
        ],
    },
    {
        name: 'Fuel System',
		nameA:'',
        slug: 'fuel-system',
        image: '/images/categories/category-2.jpg',
        items: 356,
        children: [
            { name: 'Fuel Pumps',nameA:'مضخات الوقود', slug: 'fuel-pumps' },
            { name: 'Motor Oil',nameA:'زيت المحرك', slug: 'motor-oil' },
            { name: 'Gas Caps',nameA:'أغطية الغاز', slug: 'gas-caps' },
            { name: 'Fuel Injector',nameA:'حاقن الوقود', slug: 'fuel-injector' },
            { name: 'Control Motor',nameA:'محرك تحكم', slug: 'control-motor' },
        ],
    },
    {
        name: 'Body Parts',
		nameA:'',
        slug: 'body-parts',
        image: '/images/categories/category-3.jpg',
        items: 54,
        children: [
            { name: 'Bumpers',nameA:'مصدات', slug: 'bumpers' },
            { name: 'Hoods',nameA:'اغطية', slug: 'hoods' },
            { name: 'Grilles',nameA:'شبكات', slug: 'grilles' },
            { name: 'Fog Lights',nameA:'مصابيح الضباب', slug: 'fog-lights' },
            { name: 'Door Handles',nameA:'مقابض الباب', slug: 'door-handles' },
        ],
    },
    {
        name: 'Interior Parts',
		nameA:'',
        slug: 'interior-parts',
        image: '/images/categories/category-4.jpg',
        items: 274,
        children: [
            { name: 'Dashboards',nameA:'لوحات القيادة', slug: 'dashboards' },
            { name: 'Seat Covers',nameA:'أغطية المقاعد', slug: 'seat-covers' },
            { name: 'Floor Mats',nameA:'سجاد الأرضية', slug: 'floor-mats' },
            { name: 'Sun Shades',nameA:'ظلال الشمس', slug: 'sun-shades' },
            { name: 'Visors',nameA:'أقنعة', slug: 'visors' },
            { name: 'Car Covers',nameA:'اغطية السيارات', slug: 'car-covers' },
            { name: 'Accessories',nameA:'مكملات', slug: 'interior-parts-accessories' },
        ],
    },
    {
        name: 'Tires & Wheels',
		nameA:'',
        slug: 'tires-wheels',
        image: '/images/categories/category-5.jpg',
        items: 508,
        children: [
            { name: 'Wheel Covers',nameA:'اغطية الاطارات', slug: 'wheel-covers' },
            { name: 'Brake Kits',nameA:'أطقم الفرامل', slug: 'brake-kits' },
            { name: 'Tire Chains',nameA:'سلاسل الاطارات', slug: 'tire-chains' },
            { name: 'Wheel disks',nameA:'أقراص العجلات', slug: 'wheel-disks' },
            { name: 'Tires',nameA:'الإطارات', slug: 'tires' },
            { name: 'Sensors',nameA:'مجسات', slug: 'sensors' },
            { name: 'Accessories',nameA:'مكملات', slug: 'tires-wheels-accessories' },
        ],
    },
    {
        name: 'Engine & Drivetrain',
		nameA:'',
        slug: 'engine-drivetrain',
        image: '/images/categories/category-6.jpg',
        items: 95,
        children: [
            { name: 'Timing Belts',nameA:'أحزمة التوقيت', slug: 'timing-belts' },
            { name: 'Spark Plugs',nameA:'شمعات الإشعال', slug: 'spark-plugs' },
            { name: 'Oil Pans',nameA:'أحواض الزيت', slug: 'oil-pans' },
            { name: 'Engine Gaskets',nameA:'جوانات المحرك', slug: 'engine-gaskets' },
            { name: 'Oil Filters',nameA:'فلاتر الزيت', slug: 'oil-filters' },
            { name: 'Engine Mounts',nameA:'قوة المحرك تزداد', slug: 'engine-mounts' },
            { name: 'Accessories',nameA:'مكملات', slug: 'engine-drivetrain-accessories' },
        ],
    },
    {
        name: 'Oils & Lubricants',
		nameA:'زيوت وزيوت تشحيم',
        slug: 'oils-lubricants',
        image: '/images/categories/category-7.jpg',
        items: 179,
    },
    {
        name: 'Tools & Garage',
		nameA:'أدوات وجراج',
        slug: 'tools-garage',
        image: '/images/categories/category-8.jpg',
        items: 106,
    },
];

const blogCategoriesDef: ICategoryDef[] = [
    {
        name: 'Latest News',
		nameA:'أحدث الأخبار',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
		nameA:'عروض خاصة',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
				nameA:'مبيعات الربيع',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
				nameA:'مبيعات الصيف',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
				nameA:'مبيعات الخريف',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
				nameA:'مبيعات عيد الميلاد',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
				nameA:'مبيعات أخرى',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
		nameA:'القادمون الجدد',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
		nameA:'المراجعات',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
		nameA:'العجلات والإطارات',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
		nameA:'المحرك ونظام الدفع',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
		nameA:'توصيل',
        slug: 'transmission',
    },
    {
        name: 'Performance',
		nameA:'أداء',
        slug: 'performance',
    },
];

export const shopCategoriesTree: IShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);

export const blogCategoriesTree: IBlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
