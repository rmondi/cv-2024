"use client";

import { v4 as uuidv4 } from 'uuid';

import {
  StyleSheet,
  Font,
  Document,
  Page,
  View,
  Image,
  Text } from '@react-pdf/renderer';

import { 
  AboutType,
  SkillsType,
  PortfolioType,
  CareerType } from '@/app/utils/Types';

type PdfType = {
  locale: string;
  data: {
    about: AboutType,
    skills: SkillsType,
    portfolio: PortfolioType,
    career: CareerType
  }
};

Font.register( { family: "PlayfairDisplay", src: "/fonts/PlayfairDisplay-Regular.ttf" } );
Font.register( { family: "Roboto", src: "/fonts/Roboto-Light.ttf" } );

const styles = StyleSheet.create( {
  page: {
    padding: 0,
    margin: 0,
    flexDirection: "row",
    backgroundColor: "#FFF",
    fontFamily: "Roboto",
    fontSize: "9px",
    fontWeight: "normal",
    color: "#000",
    lineHeight: "12px"
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    width: "200px",
    color: "#FFF"
  },
  sidebarHeader: {
    flex: "0 0 120px",
    backgroundColor: "#FFF"
  },
  sidebarBody: {
    position: "relative",
    flexGrow: 1,
    padding: "0 20px",
    backgroundColor: "#4F6D7A"
  },
  portrait: {
    position: "absolute",
    top: "-110px",
    left: "25px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  portraitInner: {
    position: "absolute",
    top: "5%",
    right: "5%",
    bottom: "5%",
    left: "5%",
    borderRadius: "50%",
    overflow: "hidden"
  },
  portraitImage: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  subTitle: {
    fontFamily: "PlayfairDisplay",
    fontSize: "12px",
    lineHeight: "12px",
    marginBottom: "10px"
  },
  paragraph: {
    margin: "5px 0"
  },
  about: {
    marginTop: "60px"
  },
  skills: {
    marginTop: "20px"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    width: "395px"
  },
  header: {
    flex: "0 0 120px",
    display: "flex",
    justifyContent: "center",
    padding: "0 15px"
  },
  title: {
    fontFamily: "PlayfairDisplay",
    fontSize: "36px",
    lineHeight: "36px",
    color: "#4F6D7A"
  },
  job: {
    marginTop: "10px",
    fontFamily: "PlayfairDisplay",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#555"
  },
  content: {
    flexGrow: 1,
    padding: "0 15px"
  },
  section: {
    padding: "10px 0",
    borderTop: "1px solid #CED6E0"
  },
  career: {},
  experience: {
    marginBottom: "10px"
  },
  experienceTitle: {
    fontFamily: "PlayfairDisplay",
    fontSize: "11px",
    lineHeight: "11px",
    color: "#4F6D7A"
  },
  experienceDate: {
    marginTop: "5px",
    fontSize: "8px",
    lineHeight: "8px",
    color: "#555"
  },
  experienceDescription: {
    marginTop: "7px"
  },
  experiencesTasks: {
    paddingLeft: "10px",
  },
  experienceTask: {
    marginTop: "2px",
    fontSize: "8px",
    lineHeight: "8px"
  },
  experienceTags: {
    marginTop: "7px",
    flexDirection: "row"
  },
  experienceTag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "12px",
    padding: "0 5px",
    marginLeft: "3px",
    fontSize: "6px",
    fontWeight: "bold",
    lineHeight: "6px",
    color: "#FFF",
    borderRadius: "3px",
    backgroundColor: "#DD6E42"
  },
  footer: {
    flex: "0 0 5%",
  }
} );

const Pdf = ( { locale, data }: PdfType ) => {

  const { about, skills, portfolio, career } = data;

  const i18n: { [ key: string ]: { [ key: string ]: string } } = {
    about: {
      fr: "À propos",
      en: "About me"
    },
    skills: {
      fr: "Compétences",
      en: "Skills"
    },
    career: {
      fr: "Expérience professionnelle",
      en: "Professional experience"
    }
  };
  
  return (
    <Document>
      <Page size="FOLIO" style={ styles.page }>
        <View style={ styles.sidebar }>
          <View style={ styles.sidebarHeader }></View>
          <View style={ styles.sidebarBody }>
            <View style={ styles.portrait }>
              <View style={ styles.portraitInner }>
                <Image
                  style={ styles.portraitImage }
                  src={ about.image }
                />
              </View>
            </View>
            <View style={ styles.about }>
              <View style={ styles.subTitle }>
                <Text>{ i18n.about[locale] }</Text>
              </View>
              {
                about.introduction.map( element => (
                  <View key={ uuidv4() } style={ styles.paragraph }>
                    <Text>{ element }</Text>
                  </View>
                ) )
              }
            </View>
            <View style={ styles.skills }>
              <View style={ styles.subTitle }>
                <Text>{ i18n.skills[locale] }</Text>
              </View>
              <View>
                {
                  skills.details.map( skill => (
                    <View key={ uuidv4() }>
                      <View>
                        <img src={ skill.icon } />
                      </View>
                      <View>
                        <Text>{ skill.title }</Text>
                      </View>
                    </View>
                  ) )
                }
              </View>
            </View>
          </View>
        </View>
        <View style={ styles.main }>
          <View style={ styles.header }>
            <View>
              <View style={ styles.title }>
                <Text>{ about.name }</Text>
              </View>
              <View style={ styles.job }>
                <Text>{ about.job }</Text>
              </View>
            </View>
          </View>
          <View style={ styles.content }>
            <View style={ styles.section }>
              <View style={ styles.subTitle }>
                <Text>{ i18n.career[locale] }</Text>
              </View>
              <View style={ styles.career }>
                {
                  career.map( element => (
                    <View key={ uuidv4() } style={ styles.experience }>
                      <View style={ styles.experienceTitle }>
                        <Text>{ element.title }</Text>
                      </View>
                      <View style={ styles.experienceDate }>
                        <Text>
                          {
                            `${ element.start_date } - ${ element.end_date } | ${ element.city } (${ element.country }) | ${ element.type }`
                          }
                        </Text>
                      </View>
                      <View style={ styles.experienceDescription }>
                        <Text>{ element.description }</Text>
                      </View>
                      <View style={ styles.experiencesTasks }>
                        {
                          element.tasks.map( task => (
                            <View key={ uuidv4() } style={ styles.experienceTask }>
                              <Text>- { task }</Text>
                            </View>
                          ) )
                        }
                      </View>
                      <View style={ styles.experienceTags }>
                        {
                          element.tags.map( tag => (
                            <View key={ uuidv4() } style={ styles.experienceTag }>
                              <Text>{ tag }</Text>
                            </View>
                          ) )
                        }
                      </View>
                    </View>
                  ) )
                }
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Pdf;