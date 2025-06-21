export interface Project {
  title: string
  category: string
  image: string
  link: string
  description?: string
  content?: string
  completionDate?: string
  location?: string
  client?: string
}

export const projects: Project[] = [
  {
    title: 'مجمع سكني راقٍ في العاصمة الإدارية',
    category: 'سكني',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/projects/new-capital-residential',
    description:
      'مجمع سكني متكامل يضم أكثر من 100 وحدة بتشطيبات فاخرة ومرافق خدمية',
    content:
      'يمتد هذا المجمع السكني الراقي على مساحة تقارب 30,000 متر مربع في أحد أحياء العاصمة الإدارية الجديدة الواعدة. يضم المشروع 8 مبانٍ سكنية متوسطة الارتفاع (أرضي + 5 طوابق)، تحتوي مجتمعة على 120 وحدة سكنية متنوعة من حيث المساحات والتصميم. تم تجهيز المشروع بخدمات متكاملة تشمل مواقف سيارات، مساحات خضراء، منطقة ترفيهية، ونظام أمان ومراقبة حديث. يعتمد التصميم على الدمج بين الفخامة والعملية، ويوفر بيئة سكنية هادئة وآمنة تناسب العائلات الباحثة عن مستوى راقٍ من المعيشة. المشروع يمثل نموذجًا ناجحًا لمشروعات سكنية متوسطة الحجم تنفذها شركات مقاولات محترفة بتكلفة مناسبة وجودة عالية.',
    completionDate: '2020',
    location: 'العاصمة الإدارية الجديدة، جمهورية مصر العربية',
    client: 'شركة تطوير عقاري محلية بالتعاون مع شركتنا',
  },
  {
    title: 'تطوير مبنى إداري لهيئة التأمينات',
    category: 'إدارى',
    image:
      'https://res.cloudinary.com/dqj1vjrxu/image/upload/f_auto,q_auto/v1/%D9%85%D9%88%D9%82%D8%B9%20%D8%AF%D9%8A%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D8%B1/lmfd66qpdr7qppxweggd',
    link: '/projects/social-insurance-building',
    description:
      'مبنى إداري متكامل بمرافق حديثة لخدمة هيئة التأمينات الاجتماعية',
    content:
      'تم تنفيذ مشروع تطوير المبنى الإداري لهيئة التأمينات الاجتماعية وفق أحدث المعايير الهندسية لضمان بيئة عمل مريحة وفعالة. يضم المبنى مكاتب إدارية، قاعات اجتماعات، أنظمة أمن وحماية متقدمة، بالإضافة إلى مرافق خدمية للموظفين والزوار.',
    completionDate: '2024',
    location: 'بركة السبع , جمهورية مصر العربية',
    client: 'هيئة التأمينات الاجتماعية',
  },
  //   {
  //     title: 'مصنع متطور',
  //     category: 'صناعي',
  //     image:
  //       'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //     link: '/projects/advanced-factory',
  //     description: 'مصنع متطور للصناعات التحويلية',
  //     content:
  //       'تم إنشاء مصنع متطور للصناعات التحويلية على مساحة 75,000 متر مربع. يتضمن المصنع أحدث التقنيات والمعدات الصناعية، مع مراعاة أعلى معايير السلامة والبيئة.',
  //     completionDate: '2023',
  //     location: 'الدمام، المملكة العربية السعودية',
  //     client: 'الشركة السعودية للصناعات',
  //   },
  //   {
  //     title: 'فندق خمس نجوم',
  //     category: 'سياحي',
  //     image:
  //       'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //     link: '/projects/five-star-hotel',
  //     description: 'فندق فاخر خمس نجوم مع 300 غرفة',
  //     content:
  //       'تم تصميم وتنفيذ فندق فاخر خمس نجوم يتضمن 300 غرفة وجناح، مع مرافق متكاملة تشمل مطاعم، صالات اجتماعات، مركز سبا، وبركة سباحة.',
  //     completionDate: '2022',
  //     location: 'مكة المكرمة، المملكة العربية السعودية',
  //     client: 'مجموعة الفنادق الدولية',
  //   },
  //   {
  //     title: 'مستشفى متخصص',
  //     category: 'صحي',
  //     image:
  //       'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
  //     link: '/projects/specialized-hospital',
  //     description: 'مستشفى متخصص بسعة 200 سرير',
  //     content:
  //       'تم إنشاء مستشفى متخصص على مساحة 40,000 متر مربع، يتضمن 200 سرير، غرف عمليات متطورة، ومراكز تشخيص متكاملة. تم تجهيز المستشفى بأحدث التقنيات الطبية.',
  //     completionDate: '2023',
  //     location: 'الرياض، المملكة العربية السعودية',
  //     client: 'وزارة الصحة',
  //   },
  //   {
  //     title: 'مدرسة دولية',
  //     category: 'تعليمي',
  //     image:
  //       'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  //     link: '/projects/international-school',
  //     description: 'مدرسة دولية متكاملة لـ 1000 طالب',
  //     content:
  //       'تم تصميم وتنفيذ مدرسة دولية متكاملة تتسع لـ 1000 طالب. تتضمن المدرسة فصول دراسية حديثة، مختبرات، مكتبة، صالة رياضية، وملاعب رياضية متعددة.',
  //     completionDate: '2022',
  //     location: 'الخبر، المملكة العربية السعودية',
  //     client: 'مجموعة التعليم الدولية',
  //   },
]
