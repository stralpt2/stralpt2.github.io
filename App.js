import React, { Component } from 'react'
import { Text, View,Image, StyleSheet,ImageBackground } from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_logo} >Satriaali</Text>
          <View style={styles.actions} >
            <Image source={require('./icons/bxs-share-alt.png')} style={styles.img} />
            <View style={styles.actions_gap}></View>
            <Image source={require('./icons/bxs-cog.png')} style={styles.img} />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.entertainments} >
            <View style={styles.entertaiments_heading} >
              <Text style={styles.main_heading} >Entertainments</Text>
            </View>
            <View style={styles.services_access_container} >
              <View style={styles.icon_btn_container} >
                <View style={styles.icons_services_fit} >
                  <Image source={require('./icons/bxs-music.png')} style={styles.icons_services} />
                </View>
                <Text style={styles.services_label} >Musics</Text>
              </View>
              <View style={styles.icon_btn_container} >
                <View style={styles.icons_services_fit} >
                  <Image source={require('./icons/bxs-joystick.png')} style={styles.icons_services} />
                </View>
                <Text style={styles.services_label} >Games</Text>
              </View>
              <View style={styles.icon_btn_container} >
                <View style={styles.icons_services_fit} >
                  <Image source={require('./icons/bx-film.png')} style={styles.icons_services} />
                </View>
                <Text style={styles.services_label} >Films</Text>
              </View>
            </View>
          </View>
          <View style={styles.gap_entertainments} ></View>
          <View style={styles.entertainments} >
            <View style={styles.entertaiments_heading} >
              <Text style={styles.main_heading} >Healths</Text>
            </View>
            <View style={styles.services_access_container} >
              <View style={styles.sac1} >
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bxs-ambulance.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Hospital</Text>
                </View>
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bxs-capsule.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Drugs</Text>
                </View>
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bxs-donate-blood.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Donate Blood</Text>
                </View>
              </View>
              <View style={styles.sac2} >
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bxs-clinic.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Clinic</Text>
                </View>
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bx-show-alt.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Opthalmologist</Text>
                </View>
                <View style={styles.icon_btn_container} >
                  <View style={styles.icons_services_fit} >
                    <Image source={require('./icons/bxs-brain.png')} style={styles.icons_services} />
                  </View>
                  <Text style={styles.services_label} >Psychological</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer} >
          <View style={styles.icons_accessibility_container} >
            <Image source={require('./icons/bxs-message-detail.png')} style={styles.icons_accessibility}/>
            <Image source={require('./icons/bxs-cart.png')} style={styles.icons_accessibility}/>
            <Image source={require('./icons/bxs-home.png')} style={styles.icons_accessibility}/>
            <Image source={require('./icons/bxs-search-alt-2.png')} style={styles.icons_accessibility}/>
            <Image source={require('./icons/bxs-user.png')} style={styles.icons_accessibility}/>

          </View>
        </View>
      </View>
    )
  }
}

export default App
const styles = StyleSheet.create({
  img: {
    height:20,
    width:20,
  },
  header_logo: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#C32BAD',
    fontWeight: '900',
    fontSize: 15,
    letterSpacing: 4
  },
  container: {
    flex: 1,
    backgroundColor: '#EB92BE',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
  actions_gap: {
    width: 10
  },
  main: {
    display: 'flex',
    width: '100%',
    padding: 20,
    paddingTop: 0,
  },
  main_heading: {
    color: '#C32BAD',
    fontWeight: 'bold',
  },
  entertainments: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(246, 234, 190, .5)',
    padding: 10,
    color: '#C32BAD',
    borderRadius: 10,
  },
  services_access_container: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  services_label: {
    color: '#C32BAD',
  },
  entertaiments_heading: {
    fontWeight: 700,
  },
  icon_btn_container: {
    display: 'flex',
    alignItems: 'center',
  },
  icons_services: {
    width: 50,
    height: 50,
  },
  icons_services_fit: {
    display: 'flex',
    backgroundColor: '#F6D7A7',
    padding: 20,
    flexGrow: 0,
    borderRadius: 10,
  },
  gap_entertainments: {
    height: 20,
  },
  sac1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  sac2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  icons_accessibility: {
    height: 30,
    width: 30,
  },
  icons_accessibility_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F3F0D7',
    height: '100%',
    alignItems: 'center',
    padding: 10,
  }
});