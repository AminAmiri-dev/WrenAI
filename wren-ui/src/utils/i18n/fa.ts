type PatternTranslation = {
  pattern: RegExp;
  replace: (match: RegExpMatchArray) => string;
};

export const faText: Record<string, string> = {
  'Wren AI': 'ورن AI',
  Home: 'خانه',
  Modeling: 'مدل سازی',
  Knowledge: 'دانش',
  API: 'API',
  Dashboard: 'داشبورد',
  Settings: 'تنظیمات',
  'Data source settings': 'تنظیمات منبع داده',
  'Project settings': 'تنظیمات پروژه',
  'Wren AI version:': 'نسخه ورن AI:',

  Connect: 'اتصال',
  'Select Tables': 'انتخاب جدول ها',
  'Define Relationships': 'تعریف رابطه ها',
  'Add relationship': 'افزودن رابطه',
  'Confirm to delete?': 'حذف تایید شود؟',
  'No recommended relationships': 'رابطه پیشنهادی وجود ندارد',
  'No relationships are recommended because no primary or foreign keys were detected.':
    'چون کلید اصلی یا خارجی شناسایی نشد، رابطه ای پیشنهاد نشده است.',
  From: 'از',
  To: 'به',
  Type: 'نوع',
  Relationship: 'رابطه',
  Relationships: 'رابطه ها',
  'Many-to-one': 'چند به یک',
  'One-to-many': 'یک به چند',
  'One-to-one': 'یک به یک',
  'Primary Key': 'کلید اصلی',

  Cancel: 'لغو',
  Confirm: 'تایید',
  Submit: 'ثبت',
  Save: 'ذخیره',
  Delete: 'حذف',
  Change: 'تغییر',
  Reset: 'بازنشانی',
  Convert: 'تبدیل',
  'Are you sure?': 'مطمئن هستید؟',
  'Are you sure you want to reset?':
    'آیا مطمئن هستید که می خواهید بازنشانی کنید؟',
  'Are you sure you want to pin this chart to the dashboard?':
    'آیا مطمئن هستید که می خواهید این نمودار را به داشبورد سنجاق کنید؟',
  'Are you sure you want to regenerate the chart?':
    'آیا مطمئن هستید که می خواهید نمودار را دوباره تولید کنید؟',
  'Are you sure you want to delete this ${config?.itemName}?':
    'آیا مطمئن هستید که می خواهید این مورد را حذف کنید؟',

  'Ask to explore your data': 'برای کاوش داده هایتان سوال بپرسید',
  'Ask follow-up questions to explore your data':
    'برای کاوش بیشتر داده ها سوال تکمیلی بپرسید',
  Ask: 'پرسیدن',
  Stop: 'توقف',
  Close: 'بستن',
  New: 'جدید',
  Rename: 'تغییر نام',
  Threads: 'گفتگوها',
  Learning: 'آموزش',
  Finished: 'تکمیل شده',
  'Re-run': 'اجرای دوباره',
  Regenerate: 'تولید دوباره',
  'Try asking...': 'این سوال ها را امتحان کنید...',
  'Recommended questions': 'سوال های پیشنهادی',
  'Thinking of good questions for you... (about 1 minute)':
    'در حال آماده سازی سوال های مناسب برای شما... (حدود ۱ دقیقه)',
  "We couldn't think of questions right now.":
    'فعلا نتوانستیم سوال پیشنهادی آماده کنیم.',
  "Let's try again later.": 'کمی بعد دوباره امتحان کنید.',
  'Know more about your data': 'درباره داده هایتان بیشتر بدانید',
  'User Intent Recognized': 'هدف کاربر شناسایی شد',
  'Clarification needed': 'نیاز به شفاف سازی',
  'Understanding question': 'در حال درک سوال',
  'For the most accurate semantics, please visit the modeling page.':
    'برای دقیق ترین معناشناسی، صفحه مدل سازی را بررسی کنید.',
  Answer: 'پاسخ',
  'View SQL': 'مشاهده SQL',
  Chart: 'نمودار',
  Beta: 'آزمایشی',
  'Answer preparation steps': 'مراحل آماده سازی پاسخ',
  'Answer Preparation Steps': 'مراحل آماده سازی پاسخ',
  'Adjusted answer': 'پاسخ تنظیم شده',
  'Adjust the answer': 'تنظیم پاسخ',
  'Save to knowledge': 'ذخیره در دانش',
  'View results': 'مشاهده نتایج',
  'Store this answer as a Question-SQL pair to help Wren AI improve SQL generation.':
    'این پاسخ را به عنوان جفت سوال و SQL ذخیره کنید تا تولید SQL در ورن AI بهتر شود.',
  'Learn more': 'بیشتر بدانید',
  'User-provided SQL applied': 'SQL وارد شده توسط کاربر اعمال شد',
  'Reasoning steps adjusted': 'مراحل استدلال تنظیم شد',
  'Show original SQL': 'نمایش SQL اصلی',
  'Showing up to 500 rows': 'نمایش حداکثر ۵۰۰ ردیف',
  'Considering the limit of the context window, we retrieve up to':
    'با توجه به محدودیت پنجره context، حداکثر',
  '500 rows of results to generate the answer.':
    '۵۰۰ ردیف از نتایج برای تولید پاسخ دریافت می شود.',
  'rows of results to generate the answer.':
    'ردیف از نتایج برای تولید پاسخ دریافت می شود.',
  'Click View SQL to review the step-by-step query logic and verify why the data is unavailable.':
    'برای بررسی منطق مرحله به مرحله پرس وجو و علت نبود داده، روی «مشاهده SQL» کلیک کنید.',
  'Generated from saved view': 'تولید شده از نمای ذخیره شده',
  'Using pre-saved view': 'استفاده از نمای ذخیره شده',
  'Matching saved view found. Returning results instantly.':
    'نمای ذخیره شده مطابق پیدا شد. نتیجه فوری برگردانده می شود.',
  'Successfully generated SQL statement': 'عبارت SQL با موفقیت تولید شد',
  'Cancelled by user': 'توسط کاربر لغو شد',
  'Click “Show original SQL” to get the executable version.':
    'برای دریافت نسخه قابل اجرا، روی «نمایش SQL اصلی» کلیک کنید.',
  'Click View SQL to review the step-by-step query logic':
    'برای بررسی منطق مرحله به مرحله پرس وجو، روی «مشاهده SQL» کلیک کنید',
  'Sorry, we couldn': 'متاسفانه نتوانستیم',

  'Question-SQL pairs': 'جفت های سوال و SQL',
  Instructions: 'دستورالعمل ها',
  'Question-SQL pair': 'جفت سوال و SQL',
  'Add question-SQL pair': 'افزودن جفت سوال و SQL',
  'Add an instruction': 'افزودن دستورالعمل',
  'View question-SQL pair': 'مشاهده جفت سوال و SQL',
  'View instruction': 'مشاهده دستورالعمل',
  Question: 'سوال',
  'SQL statement': 'عبارت SQL',
  'SQL Statement': 'عبارت SQL',
  'Created time': 'زمان ایجاد',
  Global: 'سراسری',
  'Instruction details': 'جزئیات دستورالعمل',
  'Matching questions': 'سوال های مرتبط',
  'Apply instruction to': 'اعمال دستورالعمل روی',
  'all queries': 'همه پرس وجوها',
  'Enter a rule that Wren AI should follow when generating SQL queries.':
    'قانونی وارد کنید که ورن AI هنگام تولید پرس وجوهای SQL رعایت کند.',
  'Enter an example question that should trigger this instruction.':
    'یک سوال نمونه وارد کنید که این دستورالعمل را فعال کند.',
  'Generate question': 'تولید سوال',

  'API history': 'تاریخچه API',
  'API reference': 'مرجع API',
  'API details': 'جزئیات API',
  'API type': 'نوع API',
  'Question / SQL': 'سوال / SQL',
  'Thread ID': 'شناسه گفتگو',
  'thread ID': 'شناسه گفتگو',
  Timestamp: 'زمان',
  Status: 'وضعیت',
  Actions: 'عملیات',
  'Duration (ms)': 'مدت زمان (میلی ثانیه)',
  'Here you can view the full history of API calls, including request':
    'اینجا می توانید تاریخچه کامل فراخوانی های API، شامل درخواست را ببینید',

  Deploy: 'استقرار',
  'Deploying...': 'در حال استقرار...',
  Synced: 'همگام',
  'Undeployed changes': 'تغییرات استقرار نیافته',
  'Review schema change impacts': 'بررسی اثر تغییرات schema',
  'Affected Resource': 'منبع متاثر',
  'Affected model': 'مدل متاثر',
  'Affected columns': 'ستون های متاثر',
  'Deleted columns': 'ستون های حذف شده',
  'Calculated Field': 'فیلد محاسباتی',
  'Calculated fields': 'فیلدهای محاسباتی',
  'Source table deleted': 'جدول منبع حذف شده است',
  'Source column deleted': 'ستون منبع حذف شده است',
  'Source column type changed': 'نوع ستون منبع تغییر کرده است',
  'Source table name': 'نام جدول منبع',
  'Schema change detected.': 'تغییر schema شناسایی شد.',
  'There is no schema change.': 'تغییر schema وجود ندارد.',
  'Source table deleted resolved successfully.':
    'حذف جدول منبع با موفقیت رفع شد.',
  'Source column deleted resolved successfully.':
    'حذف ستون منبع با موفقیت رفع شد.',

  Model: 'مدل',
  View: 'نما',
  Metric: 'سنجه',
  Models: 'مدل ها',
  Views: 'نماها',
  Columns: 'ستون ها',
  'Column Name': 'نام ستون',
  'Column Type': 'نوع ستون',
  'Table name': 'نام جدول',
  Name: 'نام',
  Description: 'توضیحات',
  Alias: 'نام مستعار',
  Expression: 'عبارت',
  Field: 'فیلد',
  'Edit metadata': 'ویرایش فراداده',
  'Select a table': 'یک جدول انتخاب کنید',
  'Select columns': 'ستون ها را انتخاب کنید',
  'Select primary key': 'کلید اصلی را انتخاب کنید',
  'Select a column': 'یک ستون انتخاب کنید',
  'Select an expression': 'یک عبارت انتخاب کنید',
  'Select a relationship type': 'نوع رابطه را انتخاب کنید',
  'No available data': 'داده ای موجود نیست',
  'No data': 'داده ای وجود ندارد',
  'Search here': 'اینجا جست وجو کنید',
  'How to create a View?': 'چطور یک نما بسازیم؟',

  'Save as View': 'ذخیره به عنوان نما',
  'Adjust SQL': 'تنظیم SQL',
  'Fix SQL': 'اصلاح SQL',
  'Adjust steps': 'تنظیم مراحل',
  'Reasoning steps': 'مراحل استدلال',
  'Regenerate answer': 'تولید دوباره پاسخ',
  'Selected models': 'مدل های انتخاب شده',
  'Select models': 'مدل ها را انتخاب کنید',
  'Wren SQL': 'Wren SQL',
  'The SQL statement used here follows': 'عبارت SQL استفاده شده در اینجا از',
  'which is': 'پیروی می کند که',
  "You're viewing Wren SQL by default. If you want to run this query on your own database, click “Show original SQL” to get the exact syntax.":
    'به صورت پیش فرض Wren SQL را می بینید. اگر می خواهید این پرس وجو را روی پایگاه داده خودتان اجرا کنید، روی «نمایش SQL اصلی» کلیک کنید تا syntax دقیق را بگیرید.',
  'Learn more about Wren SQL': 'درباره Wren SQL بیشتر بدانید',
  'You copied Wren SQL. This dialect is for the Wren Engine and may not run directly on your database.':
    'شما Wren SQL را کپی کردید. این dialect مخصوص Wren Engine است و شاید مستقیم روی پایگاه داده شما اجرا نشود.',
  "Sorry, we couldn't find any records that match your search criteria.":
    'متاسفانه رکوردی مطابق معیارهای جست وجوی شما پیدا نشد.',
  'Show top 25': 'نمایش ۲۵ مورد برتر',

  'Cache settings': 'تنظیمات کش',
  'Refresh settings': 'تنظیمات بازخوانی',
  'Enable caching': 'فعال سازی کش',
  Frequency: 'تناوب',
  'Select frequency': 'تناوب را انتخاب کنید',
  Day: 'روز',
  'Select day': 'روز را انتخاب کنید',
  Time: 'زمان',
  'Cron expression': 'عبارت cron',
  'Cron expression:': 'عبارت cron:',
  'Next schedule:': 'زمان بندی بعدی:',
  'Pin chart to dashboard': 'سنجاق نمودار به داشبورد',
  'Regenerate chart': 'تولید دوباره نمودار',
  'Edit chart': 'ویرایش نمودار',
  'Chart type': 'نوع نمودار',
  'Select chart type': 'نوع نمودار را انتخاب کنید',
  Category: 'دسته',
  'Select category': 'دسته را انتخاب کنید',
  Value: 'مقدار',
  'Select value': 'مقدار را انتخاب کنید',
  'X-axis': 'محور X',
  'Y-axis': 'محور Y',
  'Select x-axis': 'محور X را انتخاب کنید',
  'Select y-axis': 'محور Y را انتخاب کنید',
  'Sub-category': 'زیر دسته',
  'Select sub-category': 'زیر دسته را انتخاب کنید',
  'Stack groups': 'گروه های پشته ای',
  'Select stack groups': 'گروه های پشته ای را انتخاب کنید',
  'Line groups': 'گروه های خطی',
  'Select line groups': 'گروه های خطی را انتخاب کنید',

  'Data modeling guide': 'راهنمای مدل سازی داده',
  'Creating a model': 'ساخت مدل',
  'Creating a view': 'ساخت نما',
  'Working on relationship': 'کار با رابطه',
  'Connect to other data sources': 'اتصال به منابع داده دیگر',
  'Switch the language': 'تغییر زبان',
  'View full SQL': 'مشاهده SQL کامل',
  homepage: 'صفحه خانه',
  'Pose your questions at': 'سوال هایتان را در',
  ', and get some helpful answers to save as views.':
    'بپرسید و پاسخ های مناسب را به عنوان نما ذخیره کنید.',
  'Build knowledge base: Question-SQL pairs':
    'ساخت پایگاه دانش: جفت های سوال و SQL',
  'Build knowledge base: Instructions': 'ساخت پایگاه دانش: دستورالعمل ها',
  'After editing the models, remember to deploy the changes.':
    'بعد از ویرایش مدل ها، فراموش نکنید تغییرات را استقرار دهید.',
  'Click the add icon to start create your first model.':
    'برای ساخت اولین مدل، روی آیکن افزودن کلیک کنید.',
  'Click the more icon to update the columns of model or delete it.':
    'برای به روزرسانی ستون های مدل یا حذف آن، روی آیکن بیشتر کلیک کنید.',
  'business rules': 'قوانین کسب وکار',
  'query logic': 'منطق پرس وجو',

  'Change sample dataset': 'تغییر دیتاست نمونه',
  'Please be aware that choosing another sample dataset will delete all thread records in the Home page.':
    'توجه داشته باشید انتخاب یک دیتاست نمونه دیگر، همه سوابق گفتگو در صفحه خانه را حذف می کند.',
  'Project language': 'زبان پروژه',
  'Select a language': 'یک زبان انتخاب کنید',
  'This setting will affect the language in which the AI responds to you.':
    'این تنظیم روی زبانی که AI با آن پاسخ می دهد اثر می گذارد.',
  'Reset project': 'بازنشانی پروژه',
  'Please be aware that resetting will delete all current settings and records, including those in the Modeling Page and Home Page threads.':
    'توجه داشته باشید بازنشانی، همه تنظیمات و سوابق فعلی، از جمله داده های صفحه مدل سازی و گفتگوهای خانه را حذف می کند.',
  'Successfully update data source.': 'منبع داده با موفقیت به روز شد.',
  'Successfully updated project language.': 'زبان پروژه با موفقیت به روز شد.',

  'Display name': 'نام نمایشی',
  Host: 'میزبان',
  Port: 'پورت',
  Username: 'نام کاربری',
  User: 'کاربر',
  Password: 'رمز عبور',
  'input password': 'رمز عبور را وارد کنید',
  'Input password': 'رمز عبور را وارد کنید',
  Database: 'پایگاه داده',
  'Database name': 'نام پایگاه داده',
  Schema: 'اسکیما',
  Schemas: 'اسکیماها',
  Account: 'حساب',
  Warehouse: 'انبار داده',
  'Project ID': 'شناسه پروژه',
  'Dataset ID': 'شناسه دیتاست',
  Credentials: 'اعتبارنامه ها',
  'Click to upload JSON key file': 'برای بارگذاری فایل کلید JSON کلیک کنید',
  'Upload private key': 'بارگذاری کلید خصوصی',
  'Private key file': 'فایل کلید خصوصی',
  'Use SSL': 'استفاده از SSL',
  'Enable Trust Server Certificate': 'فعال سازی اعتماد به گواهی سرور',
  'Configuration options': 'گزینه های پیکربندی',
  Key: 'کلید',
  'Initial SQL statements': 'دستورهای SQL اولیه',
  Extensions: 'افزونه ها',
  'Extension name': 'نام افزونه',
  'Authentication method': 'روش احراز هویت',
  'AWS access key ID': 'شناسه کلید دسترسی AWS',
  'AWS secret access key': 'کلید محرمانه AWS',
  'AWS region': 'منطقه AWS',
  'AWS role ARN': 'ARN نقش AWS',
  'Web identity token': 'توکن هویت وب',
  'Role session name': 'نام نشست نقش',
  'S3 staging directory': 'مسیر staging در S3',
  'Client ID': 'شناسه کلاینت',
  'Client secret': 'رمز کلاینت',
  'Access token': 'توکن دسترسی',
  'Azure tenant ID': 'شناسه tenant در Azure',
  'HTTP path': 'مسیر HTTP',
  'Server hostname': 'نام میزبان سرور',
  'Cluster identifier': 'شناسه کلاستر',
  'OAuth 2.0 access token or OpenID Connect ID token':
    'توکن دسترسی OAuth 2.0 یا توکن OpenID Connect',
  'Settings → Query result location': 'تنظیمات ← محل نتیجه پرس وجو',
  'deprecated by November 2025': 'تا نوامبر ۲۰۲۵ منسوخ می شود',
  'Our BigQuery': 'BigQuery ما',
  'The GCP project ID': 'شناسه پروژه GCP',
  DuckDB: 'DuckDB',
  'ClickHouse database name': 'نام پایگاه داده ClickHouse',
  'MySQL database name': 'نام پایگاه داده MySQL',
  'Oracle database name': 'نام پایگاه داده Oracle',
  'PostgreSQL database name': 'نام پایگاه داده PostgreSQL',
  'SQL Server database name': 'نام پایگاه داده SQL Server',
  'Snowflake database name': 'نام پایگاه داده Snowflake',

  'E-commerce': 'فروشگاه اینترنتی',
  'Human Resource': 'منابع انسانی',
  'COMING SOON': 'به زودی',

  Loading: 'در حال بارگذاری',
  'Loading...': 'در حال بارگذاری...',
  'Internal server error': 'خطای داخلی سرور',
  Unknown: 'نامشخص',
  Example: 'نمونه',
  'Calculated field from the source model is not supported.':
    'فیلد محاسباتی از مدل منبع پشتیبانی نمی شود.',
  'This relationship is in use.': 'این رابطه در حال استفاده است.',

  Aggregation: 'تجمیع',
  Average: 'میانگین',
  Count: 'شمارش',
  Max: 'بیشینه',
  Min: 'کمینه',
  Sum: 'جمع',
  'Math functions': 'تابع های ریاضی',
  Absolute: 'قدر مطلق',
  'Cube root': 'ریشه سوم',
  Ceil: 'سقف',
  Exponential: 'نمایی',
  Floor: 'کف',
  'Natural logarithm': 'لگاریتم طبیعی',
  Log10: 'لگاریتم پایه ۱۰',
  Round: 'گرد کردن',
  Signum: 'تابع علامت',
  'String functions': 'تابع های رشته ای',
  Length: 'طول',
  Reverse: 'معکوس',
  'Returns the average of the values in the column.':
    'میانگین مقدارهای ستون را برمی گرداند.',
  'Returns the count of non-null rows (also known as records) in the selected data.':
    'تعداد ردیف های غیر تهی در داده انتخاب شده را برمی گرداند.',
  'Returns the largest value found in the column.':
    'بزرگ ترین مقدار موجود در ستون را برمی گرداند.',
  'Returns the smallest value found in the column.':
    'کوچک ترین مقدار موجود در ستون را برمی گرداند.',
  'Adds up all the values of the column.': 'همه مقدارهای ستون را جمع می کند.',
  'Returns the absolute (positive) value of the specified column.':
    'مقدار مطلق ستون مشخص شده را برمی گرداند.',
  'Returns the cube root of the number.': 'ریشه سوم عدد را برمی گرداند.',
  'Rounds a decimal up (ceil as in ceiling).':
    'عدد اعشاری را به سمت بالا گرد می کند.',
  'Rounds a decimal number down.': 'عدد اعشاری را به سمت پایین گرد می کند.',
  'Returns the natural logarithm of the number.':
    'لگاریتم طبیعی عدد را برمی گرداند.',
  'Returns the base 10 log of the number.':
    'لگاریتم پایه ۱۰ عدد را برمی گرداند.',
  'Returns the signum function of the number.':
    'تابع علامت عدد را برمی گرداند.',
  'Returns the number of characters in string.':
    'تعداد کاراکترهای رشته را برمی گرداند.',
  'Returns string with the characters in reverse order.':
    'رشته را با ترتیب معکوس کاراکترها برمی گرداند.',
};

const faPatterns: PatternTranslation[] = [
  {
    pattern: /^(\d+) steps?$/i,
    replace: ([, count]) => `${count} مرحله`,
  },
  {
    pattern: /^(\d+)\/(\d+) Finished$/i,
    replace: ([, current, total]) => `${current}/${total} تکمیل شده`,
  },
  {
    pattern: /^No (.+)$/i,
    replace: ([, item]) => `${item} وجود ندارد`,
  },
  {
    pattern: /^(.+) result\(s\) found$/i,
    replace: ([, count]) => `${count} نتیجه پیدا شد`,
  },
  {
    pattern: /^Showing (\d+) of (.+)$/i,
    replace: ([, shown, total]) => `نمایش ${shown} از ${total}`,
  },
  {
    pattern: /^Cache refreshes every (.+) at (.+)$/i,
    replace: ([, day, time]) => `کش هر ${day} ساعت ${time} بازخوانی می شود`,
  },
  {
    pattern: /^Last refresh (.+)$/i,
    replace: ([, time]) => `آخرین بازخوانی ${time}`,
  },
  {
    pattern: /^Are you sure you want to change to "(.+)" dataset\?$/i,
    replace: ([, dataset]) =>
      `آیا مطمئن هستید که می خواهید به دیتاست «${dataset}» تغییر دهید؟`,
  },
  {
    pattern: /^Are you sure you want to delete this (.+)\?$/i,
    replace: ([, item]) => `آیا مطمئن هستید که می خواهید ${item} را حذف کنید؟`,
  },
  {
    pattern: /^Successfully created (.+)\.$/i,
    replace: ([, item]) => `${item} با موفقیت ایجاد شد.`,
  },
  {
    pattern: /^Successfully updated (.+)\.$/i,
    replace: ([, item]) => `${item} با موفقیت به روز شد.`,
  },
  {
    pattern: /^Successfully deleted (.+)\.$/i,
    replace: ([, item]) => `${item} با موفقیت حذف شد.`,
  },
  {
    pattern: /^Please input (.+)\.$/i,
    replace: ([, item]) => `لطفا ${item} را وارد کنید.`,
  },
  {
    pattern: /^Please select (.+)\.$/i,
    replace: ([, item]) => `لطفا ${item} را انتخاب کنید.`,
  },
];

const attributes = [
  'placeholder',
  'title',
  'aria-label',
  'aria-placeholder',
  'alt',
  'data-placeholder',
];

const skipSelector = [
  'script',
  'style',
  'code',
  'pre',
  'textarea',
  '.ace_editor',
  '.monaco-editor',
  '.vega-embed',
  '[data-no-persianize]',
].join(',');

const attributeSkipSelector = [
  'script',
  'style',
  'code',
  'pre',
  '.ace_editor',
  '.monaco-editor',
  '.vega-embed',
  '[data-no-persianize]',
].join(',');

const hasLatin = /[A-Za-z]/;

function preserveOuterWhitespace(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  return `${leading}${translated}${trailing}`;
}

export function translateFaText(value: string) {
  if (!value || !hasLatin.test(value)) return value;

  const normalized = value.replace(/\s+/g, ' ').trim();
  if (!normalized) return value;

  const exact = faText[normalized];
  if (exact) return preserveOuterWhitespace(value, exact);

  for (const item of faPatterns) {
    const match = normalized.match(item.pattern);
    if (match) return preserveOuterWhitespace(value, item.replace(match));
  }

  return value;
}

function shouldSkip(node: Node, selector = skipSelector) {
  const element =
    node.nodeType === Node.ELEMENT_NODE
      ? (node as Element)
      : node.parentElement;
  return !!element?.closest(selector);
}

function translateTextNode(node: Text) {
  if (shouldSkip(node)) return;
  const translated = translateFaText(node.data);
  if (translated !== node.data) node.data = translated;
}

function translateElementAttributes(element: Element) {
  if (shouldSkip(element, attributeSkipSelector)) return;
  for (const attribute of attributes) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    const translated = translateFaText(value);
    if (translated !== value) element.setAttribute(attribute, translated);
  }
}

function translateTree(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node as Text);
    node = walker.nextNode();
  }

  if (root instanceof Element) translateElementAttributes(root);
  root.querySelectorAll?.('*').forEach(translateElementAttributes);
}

export function installPersianDomTranslator() {
  if (typeof window === 'undefined') return () => {};

  document.documentElement.lang = 'fa';
  document.documentElement.dir = 'rtl';
  document.body.dir = 'rtl';

  let applying = false;
  const run = (root: ParentNode = document.body) => {
    if (applying) return;
    applying = true;
    translateTree(root);
    applying = false;
  };

  run();

  const observer = new MutationObserver((mutations) => {
    if (applying) return;
    applying = true;
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        translateTextNode(mutation.target as Text);
        continue;
      }
      if (mutation.type === 'attributes') {
        translateElementAttributes(mutation.target as Element);
        continue;
      }
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          translateTextNode(node as Text);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          translateTree(node as Element);
        }
      });
    }
    applying = false;
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: attributes,
  });

  return () => observer.disconnect();
}
