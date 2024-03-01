import React from 'react'
import "scss/_about.scss"

export default function About() {
    return (
        <div className='container'>
            <div className="content">
                <div className="intro">
                    <h1 className='title'>
                        Покемон Портал: Ваш источник знаний о мире покемонов
                    </h1>
                    <p className='description'>
                        Добро пожаловать на сайт, полностью посвященный удивительному миру покемонов!
                        Наша онлайн энциклопедия предлагает самую полную информацию о покемонах, их типах, характеристиках, историях и многое другое.
                    </p>
                </div>
                <div className="features-section">
                    <ul className='features'>
                        <li className='feature'>
                            Покемоны и их Типы: Узнайте о разнообразии покемонов, их типах (например, огонь, вода, трава, электричество), и какие преимущества и слабости у них есть.
                        </li>
                        <li className='feature'>
                            История Покемонов: Откройте историю создания покемонов, их эволюции и распространения по миру. Узнайте о легендах, связанных с редкими видами.
                        </li>
                        <li className='feature'>
                            Путешествие Покемонами: Исследуйте различные регионы, где обитают покемоны, и узнайте, какие виды встречаются в каждом из них.
                            Погрузитесь в покемонов вместе с героями игр и мультсериалов.
                        </li>
                        <li className='feature'>
                            Бои и Тренировки: Получите советы о тренировках покемонов, эффективных стратегиях для боев и овладейте искусством покемон-тренера.
                        </li>
                        <li className='feature'>
                            Коллекционирование и Обмен: Узнайте, как начать собирать свою коллекцию покемонов, а также о возможностях обмена с другими тренерами по всему миру.
                        </li>
                        <li className='feature'>
                            Покемон в Культуре: Изучите влияние покемонов на культуру, искусство, музыку и литературу. Узнайте, как они стали символом для многих поколений.
                        </li>
                        <li className='feature'>
                            Сообщество Покемонов: Присоединяйтесь к нашему активному сообществу покемонов, где вы можете делиться своими впечатлениями, обсуждать новости и обмениваться советами с другими тренерами.
                        </li>
                    </ul>
                </div>
                <div className="reasons-section">
                    <h3 className='subtitle'>Почему выбирают нас:</h3>
                    <ul className='reasons'>
                        <li className='reason'>Авторитетность: Наша команда состоит из покемон-энтузиастов и профессионалов, готовых делиться своим знанием.</li>
                        <li className='reason'>Обновления: Мы постоянно обновляем контент, чтобы предоставить вам самую актуальную информацию.</li>
                        <li className='reason'>Удобство использования: Наш сайт разработан с учетом удобства и доступности для всех пользователей, независимо от их уровня опыта.</li>
                        <li className='reason'>Сообщество: Присоединяйтесь к нашему дружественному сообществу покемон-тренеров, чтобы обсуждать, делись и учиться вместе!</li>
                    </ul>
                </div>
                <p className='footer'>
                    Будьте в курсе последних новостей о мире покемонов, исследуйте их таинственный мир и станьте настоящим мастером вместе с нами!
                </p>
            </div>
        </div>
    )
}