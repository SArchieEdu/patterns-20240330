# Мастер-класс по архитектуре и паттернам 30.03

## Паттерны

1. Порождающие
1. Структурные
1. Поведенческие

## Порождающие

Помогают организовать гибкое создание сущностей(чаще объектов). Уменьшаю зависимости.

1. Абстрактная фабрика (Abstract Factory)
1. Строитель(Builder)
1. Фабричный метод (Factory method)
1. Прототип (Prototype)
1. Одиночка (Singleton)

### Абстрактная фабрика (Abstract Factory)

#### Описание

Паттерн позволяющий создавать семейства сущностей без жесткой завязки на конкретную реализацию(классы).

#### Когда применяю

Применяю если в проекте есть семейства сущностей(наборы сущностей). Количество и тип сущностей в каждом наборе одинаковые, но различается реализация.

Набор 1:

1. Кнопка
1. Инпут
1. Таблица

Набор 2:

1. Кнопка Мобильная
1. Инпут Мобильный
1. Таблица Мобильная

Таким образом мы можем менять фабрику в зависимости от типа устройства(мобильное, десктоп). Таким образом мы только в одном месте определим какую фабрику выбрать и в других местах просто использовать ее.

### Частота использования

Редко

### Строитель(Builder)

#### Описание

Позволяет создавать сложные объекты пошагово.

#### Когда применяю

Если мне необходимо формировать какой-то конфиг динамически, либо динамически нужно сформировать форму, либо я реализую степпер, где пользователь шаг за шагом заполняет большую форму. То я сразу смотрю в сторону билдера. Если нужно собрать сложный/большой объект - билдер.

### Частота использования

Часто

### Фабричный метод (Factory method)

#### Описание

Паттерн позволяющий подменять реализацию создаваемой сущности.

#### Когда применяю

Фабрика набор методов для создания набора сущностей. Фабричный метод - метод для создания сущностей. Главное чтобы эти сущности описывались одним интерфейсом. Применяю тогда, когда у меня есть несколько сущностей, они взаимозаменяемые, нужно динамически их создавать, выбирая в зависимости от условий.

### Частота использования

Редко

### Прототип (Prototype)

#### Описание

Паттерн позволяющий создавать сущность на основе другой сущности.

#### Когда применяю

Применяю, когда мне необходимо создавать сущности по шаблону. Например: создание коллекции с фильмами. Создание формы фидбека и тд. У меня в проекте есть прототип, когда пользователь хочет создать новую коллекцию, написать новый отзыв, то я просто копирую прототип с дефолтными значениями и потом пользователь уже заполняет сам то, что нужно.

### Частота использования

Средне

### Одиночка (Singleton)

#### Описание

Паттерн позволяющий создать только один экземпляр.

#### Когда применяю

Если я слышу, что что-то должно быть в единственном числе - синглтон. Один экземпляр движка плеера, одна фабрика создания рекламных баннеров, один логгер, один чат поддержки, один экземпляр сервиса(часто в DI).

### Частота использования

Часто

## Структурные

Помогают организовать иерархие сущностей без лишних жестких зависимостей.

1. Адаптер (Adapter)
1. Мост (Bridge)
1. Компоновщик (Composite)
1. Декоратор (Decorator)
1. Фасад (Facade)
1. Легковес (Flyweight)
1. Заместитель (proxy)

### Адаптер (Adapter)

#### Описание

Паттерн позволяющий адаптировать реализацию под интерфейс без внесения в нее изменений.

#### Когда применяю

Если у меня есть несколько реализаций чего-то(плеерных движков, логгеров и тп). Мне хочется чтобы в приложении с ними могли работать одинаково, чтобы специфичная логика не расползалась. Я реализую адаптеры, которые позволяют адаптировать эти реализации под интерфейс.
Если я вижу, что мы ждём сущность соответствующую интерфейсу, но в библиотеки, которую мы используем эта сущность с другим интерфейсом, то я адаптирую ее под наш интерфейс. Там могут быть просто другие названия методов и тп. В адаптере будет логика адаптирования под наш интерфейс.

### Частота использования

Часто

### Мост (Bridge)

#### Описание

Паттерн позволяющий разделить реализацию и абстракцию на две иерархии, что позволяет их развивать независимо.

#### Когда применяю

Если я вижу, что есть какой-то класс, сущность или модуль, но одна из его частей изменяется чаще других, то можно ее вынести и организовать взаимодействие на уровне интерфейсов, таким образом мы сможем менять реализацию этой части, подменять ее и тд без вреда для основной неизменяемой.

### Частота использования

Средне

### Компоновщик (Composite)

#### Описание

Паттерн позволяющий сгруппировать объекты в дерево и работать с ними как с одним.

#### Когда применяю

Если я мне необходимо работать с графами, либо с структурой близкой к дереву, либо которую можно представить как дерево, то я сразу думаю о возможности использования этого паттерна.

### Частота использования

Редко

### Декоратор (Decorator)

#### Описание

Паттерн позволяющий добавить новой логики к уже имеющимся методам, реализации.

#### Когда применяю

Если мне нужно гибко добавлять новую логику к уже имеющийся, то я могу либо сделать кучу ифаков, либо сделать декоратор, декоратор лучше, тк не усложняет логику и можно динамически менять декораторы.

### Частота использования

Очень часто

### Фасад (Facade)

#### Описание

Паттерн позволяющий просто работать со сложной реализацией или группой реализаций.

#### Когда применяю

Если у меня есть сложный механизм, сложная реализация, иногда даже состоящая из нескольких частей, то я думаю о фасаде. Фасад позволяет скрыть сложность от пользователя(конечный пользователь, другие разработчики) и работать просто с чем-то сложным

### Частота использования

Часто

### Легковес (Flyweight)

#### Описание

Паттерн позволяющий экономить память и уменьшать сложность.

#### Когда применяю

Если я замечаю, что у многих объектов есть одинаковая часть, которая и изменяется одинаково, например, пользователь, то я просто выношу пользователя в один объект и все остальные ссылаются на него, а не хранят каждый у себя.

### Частота использования

Часто

### Посредник (Proxy)

#### Описание

Паттерн - секретарь. Позволяет сделать что-то до/после вызова реального метода объекта.

#### Когда применяю

Если мне нужно гибко управлять доступом к частям объекта, то я выношу такую логику в проксю, что позволяет не усложнять сам объект. А в прксе уже идут проверки и тп. Еще проксе можно организовать логгирование, кеширование, предзагрузку и тп.

### Частота использования

Средне

## Поведенческие

Помогают организовать гибкое взаимодействие между сущностями.

1. Цепочка обязанностей (Chain of responsibility)
1. Команда (Command)
1. Итератор (Iterator)
1. Посредник (Mediator)
1. Снимок, сохранение (Memento)
1. Наблюдатель (Observer)
1. Состояние (State)
1. Стратегия (Strategy)
1. Шаблонный метод (Template method)
1. Посетитель (Visitor)

### Цепочка обязанностей (Chain of responsibility)

#### Описание

Паттерн позволяющий разделить логику между обработчиками и выполнять ее последовательно.

#### Когда применяю

Использую если нужно организовать логику сложной проверки. Ярким примером являются мидлвары в редаксе.

### Частота использования

Средне

### Команда (Command)

#### Описание

Паттерн позволяющий превратить действие в объект. Это позволяет организовывать очереди, логику отмены.

#### Когда применяю

Использую если нужно фиксировать каждое действие пользователя, чтобы иметь возможность работать с историей. Яркий пример - работа с браузерным апи, каждый переход это команда, которая складывается в историю и мы можем вернуться на любой участок истории. (так работают почти все клиентские роутеры)

### Частота использования

Средне

### Итератор (Iterator)

#### Описание

Паттерн позволяющий организовать обход коллекции, без знаний о ее внутренней структуре.

#### Когда применяю

Если работаю с какой-то кастомной коллекцией(не массив), например linked list, queue и что-то подобное, то там реализую итератор, чтобы комфортнее и проще обходить их.

### Частота использования

Средне

### Посредник (Mediator)

#### Описание

Паттерн позволяющий уменьшить связанность между несколькими сущностями.

#### Когда применяю

Если у меня есть ворох объектов/сущностей/модулей и они взаимодействуют другом с другом напрямую, то в будущем это может привести к циклическим зависимостям, избыточной связанности и тп. В этих случаях я реализую сущность-посредник, который отвечает за работу с этими связями, а сами сущности работают только с ним.

### Частота использования

Часто

### Снимок, сохранение (Memento)

#### Описание

Паттерн позволяющий делать сохранений объекта, прошлые состояния и восстанавливать их без погружения пользователя в детали реализации.

#### Когда применяю

Если необходимо реализовать логику отмены изменений в рамках одного состояния/объекта, то я выберу снимок, а не команду, тк команда нечто более глобальное(затрагивает много частей, много состояний), снимок более локальное.

### Частота использования

Редко

### Наблюдатель (Observer)

#### Описание

Паттерн позволяющий подписываться на изменений/события и сразу же реагировать на них.

#### Когда применяю

Если необходимо следить за изменениями(стор редакса как пример), следить за событиями(браузерные ивенты) и тп, то тут этот паттерн отлично подходит, только не забывайте отписываться. Основная идея в том, что мы уходим от постоянного опрашивания, теперь нас оповещают о изменениях/событиях

### Частота использования

Часто

### Состояние (State)

#### Описание

Паттерн позволяющий менять поведение в зависимости от состояния.

#### Когда применяю

Ярким примером является плеер. Если фильм играет, то контролы ведут себя одним образом, если на паузе другим, если проигрывание закончилось третьим. Основная идея в том, что если наша сущность может быть в нескольких состояниях(режим редактирования и просмотра, проигрывание и пауза, ограниченный режим и полный доступ и тп), то стоит обратить внимание на этот паттерн.

### Частота использования

Средне

### Стратегия (Strategy)

#### Описание

Паттерн позволяющий менять алгоритм динамически.

#### Когда применяю

Определяем семейство алгоритмов(сортировки таблицы, способы логгирования, способы фильтрации) и динамически их меняем. Самое важное, что интерфейс реализации алгоритма не меняется, меняется только логика внутри. Была сортировка по убыванию, стало по возрастанию и тд.

### Частота использования

Часто

### Шаблонный метод (Template method)

#### Описание

Паттерн позволяющий определить структуру алгоритма, реализации давая возможность в подклассах реализовать детали.

#### Когда применяю

Если у меня есть алгоритм, но в каждом подклассе меняется его реализация, то я использую шаблонный метод. Яркий пример абстрактный метод в в тайпскрипте. Используя его мы определяем интерфейс, но реализацию пишут подклассы.

### Частота использования

Редко

### Посетитель (Visitor)

#### Описание

Паттерн позволяющий внедрить объект в другие, который может выполнять операции над ними.

#### Когда применяю

Если мне необходимо првоести схожие операции над большим количеством объектов коллекции или тп, то я реализую посетитель и он посещает все необходимы объекты(хорошо работает в связке с итератором) и выполняет операцию. Например переименование файлов, замена импортов, печать частей коллекции и тд, что-то однообразное, но в разных местах.

### Частота использования

Редко
