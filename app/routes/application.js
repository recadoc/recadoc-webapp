import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import marked from 'npm:marked';

// FOR MOCKUP PURPOSES ONLY
const text = `# Ille ordine solet dissimulator venti

## Harenam arcisque

Lorem markdownum Phoebo trabe vitae, missa omnes corpus insula. In quidem
sagitta parva marmora voluere terribilesque Lucifero, viae gemitus, [sede
sonent](http://communein.com/) a inque bellum! Locis agit ictu adulantes totam
candida urbes et super potuere sine adhibent; ululare. Potestas amplexa pari
fuit formatum? *Circumspicit* discrimine sanguine ut marem ingredior Aricinae
tellus: Haemonias.

1. Fuit aeternas
2. Letum pars melior
3. Dea Saturnia pro spoliata huic Bistoniis
4. Et retroque

## Per frendens tectus silvis

Me famulosne et tibi, arbor non Troica gente summam frendens. Manu geminas
*defectos*, times sit inquit totoque lacerti: sit, et secreta tamen iter? Vias
iam turbasti et origo spes Hebe Stygiis inermia quid! Suus sole meum per
*evincitque caelumque* ab coniunx et adventare utilis. Marinas urbis sit
adcommodat caveo amanti inpatiens **tenuere aristas fetus**.

    if (vgaCloneData + 5) {
        python *= framework_latency(format_video_intranet,
                interfaceSystem.supplyUtfKeywords(computingNic, ict_on),
                readme);
    }
    androidCdma(root_matrix_video - seo_file + 31);
    systemRiscDrive(win, motionSql, markup_cdn_boot);
    if (serpResponsiveCcd(-3, 45)) {
        imap_listserv_page = -1 + mediaIos * 3;
        hdvFirmware = language;
    } else {
        dvd_file = stickServerCharacter;
        cms_t_menu.tweetEbook = meta_teraflops;
    }

## Breviore mandate molles tibi iuvenemque abest agreste

Tunc in quae deficiunt pondus in quoque novissima veluti *arcebatque morsu*,
quid vel. Totque soporem coloribus paventis vertere Chromiumque ignes; reperta
in! Adspexit flumina haerentia luctantia mecum quorum talia, in verba
revirescere iugulum. Qui diri penates mea Aphareus, rapida, sua arbitrium oculos
doleam, et digna. Pulcherrimus ferax spectacula vidit pariter, non errare, illa
suumque quoque.

Per sinus dolens lato fugit nunc iam cubitique, iuvenco illo. Reges Coei quoque
aetate; rubor mactandus insignis odores ab proles en pereunt, *iste suam* ira
sunt.

Officio fert sis ait [passam coepere](http://quies-nec.org/miseram), pete causa
redit quot cum tela. Ut oculos tremiscens reparare: tamen signum *nutricis* et
aera adduxit ac Phoebus custodes. Ira ense relatis: cur litora,
[ardere](http://constitit-retinete.io/aura-tellure), et longius *somnos nubila*.
Pallent sustulerat ut corpore, tibi, tenebrosa, te at, visa frustra velamina
querellas sperat armiferae denique regia.`;


export default Ember.Route.extend(ApplicationRouteMixin, {
    model () {
        return {
            document: Ember.String.htmlSafe(marked(text))
        }
    },
    session: Ember.inject.service('session'),
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        },
        authenticate () {
            let { identification, password } = this.getProperties('identification', 'password');
            this.get('session')
                .authenticate('authenticator:oauth2', identification, password)
                .catch((reason) => {
                    this.set('errorMessage', reason.error || reason);
                });
        }
    }
});