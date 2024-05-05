Search.setIndex({"docnames": ["Lecture-1/importance-sampling", "Lecture-1/intro", "Lecture-1/introduction", "Lecture-3/intro", "Lecture-3/kalman-filter", "Lecture-3/particle-filter", "intro", "slides"], "filenames": ["Lecture-1/importance-sampling.ipynb", "Lecture-1/intro.ipynb", "Lecture-1/introduction.ipynb", "Lecture-3/intro.ipynb", "Lecture-3/kalman-filter.ipynb", "Lecture-3/particle-filter.ipynb", "intro.md", "slides.md"], "titles": ["Importance Sampling", "Lecture 1", "Introduction", "Lecture 3", "The Kalman filter", "The particle filter", "An Introduction to Bayesian Filtering: Theory and Methods", "Slides"], "terms": {"below": [0, 2, 4, 5, 6, 7], "we": [0, 2, 6], "exemplifi": 0, "us": [0, 2, 6], "self": [0, 6], "normalis": 0, "sni": 0, "estim": [0, 5, 6, 7], "expect": [0, 2], "valu": 0, "function": [0, 2], "f": 0, "respect": 0, "probabl": 0, "distribut": [0, 2], "p": [0, 2, 5], "note": [0, 2, 6], "gener": [0, 1, 2], "form": 0, "point": [0, 2], "out": 0, "lectur": [0, 2, 6, 7], "provid": 0, "simpl": [0, 2], "exampl": [0, 2], "involv": 0, "you": [0, 2, 6, 7], "ar": [0, 2], "encourag": 0, "extend": 0, "thi": [0, 1, 2, 3, 6], "ipynb": 0, "file": 0, "includ": 0, "In": [0, 2], "consid": [0, 2], "numer": [0, 2], "challeng": 0, "densiti": 0, "integr": 0, "which": 0, "wide": 0, "research": 0, "paper": [0, 4, 5], "also": [0, 2], "call": [0, 2], "banana": 0, "defin": [0, 2, 4, 5], "follow": [0, 2], "begin": [0, 2], "align": [0, 2], "pi": 0, "x": [0, 2, 4, 5], "propto": 0, "exp": [0, 5], "left": [0, 2, 5], "frac": 0, "x_1": 0, "2": [0, 2, 4, 5, 6, 7], "10": [0, 2, 4, 5], "x_2": 0, "right": [0, 2, 5], "end": [0, 2], "what": 0, "show": [0, 2, 4, 5], "two": 0, "thing": [0, 2], "how": [0, 2], "set": 0, "bayesian": [0, 7], "infer": 0, "resampl": 0, "idea": [0, 2], "first": 0, "let": [0, 2], "visualis": [0, 2, 7], "our": [0, 2], "numpi": [0, 2, 4, 5], "np": [0, 2, 4, 5], "matplotlib": [0, 2, 4, 5], "pyplot": [0, 2, 4, 5], "plt": [0, 2, 4, 5], "rng": [0, 2, 4], "random": [0, 1, 2, 4, 5], "default_rng": [0, 2, 4], "26": 0, "def": 0, "bar_p": 0, "implement": 0, "just": [0, 2], "return": 0, "0": [0, 2, 4, 5], "1": [0, 2, 4, 5, 6, 7], "logbar_p": 0, "log": 0, "onli": [0, 2], "comput": [0, 6], "due": 0, "stabil": 0, "issu": 0, "x_bb": 0, "linspac": 0, "4": [0, 2, 4, 5, 6, 7], "100": 0, "y_bb": 0, "6": 0, "meshgrid": 0, "z_bb": 0, "zero": [0, 2, 4, 5], "i": [0, 5, 6, 7], "rang": [0, 2, 4, 5], "j": [0, 4], "contourf": 0, "cmap": 0, "rdbu": 0, "would": [0, 2], "like": [0, 2], "now": [0, 2], "its": [0, 2], "mean": 0, "gaussian": 0, "propsoal": 0, "center": 0, "around": [0, 2], "m": [0, 4], "cover": 0, "target": 0, "properli": 0, "sig_": 0, "5": [0, 2, 4, 5, 6, 7], "standard": 0, "deviat": 0, "propos": 0, "logq": 0, "sig": 0, "phi": 0, "axi": [0, 2, 5], "snis_banana": 0, "n": [0, 2, 5], "x_sampl": 0, "normal": 0, "2d": 0, "from": [0, 2, 4, 5], "logw": 0, "weight": 0, "max": [0, 5], "avoid": 0, "look": 0, "up": 0, "trick": [0, 2], "w": [0, 2, 5], "sum": [0, 5], "100000": 0, "phi_sni": 0, "print": [0, 2, 4, 5], "00613798": 0, "0063439": 0, "Of": 0, "cours": [0, 2, 6], "stage": 0, "varphi": 0, "abov": 0, "can": [0, 2, 6, 7], "chang": 0, "ani": 0, "test": 0, "essenti": 0, "describ": 0, "prior": 0, "need": [0, 2], "likelihood": 0, "simpli": 0, "take": 0, "y": [0, 2, 4, 5], "mathcal": 0, "h": [0, 4, 5], "sigma": 0, "where": 0, "observ": [0, 5], "dimens": 0, "state": [0, 2, 5], "same": [0, 2], "befor": [0, 2, 6, 7], "e": 0, "sigma_0": 0, "interest": 0, "quantiti": 0, "r": [0, 4, 5], "t": [0, 4, 5, 6, 7], "01": [0, 2], "other": [0, 2, 7], "word": 0, "have": [0, 2], "veri": [0, 2], "small": 0, "varianc": 0, "loglik": 0, "sqrt": 0, "ess": 0, "To": [0, 2], "measur": [0, 4], "qualiti": 0, "sig_q": 0, "10000": [0, 2], "q": [0, 4, 5], "matrix": [0, 4, 5], "dimension": [0, 5], "9990529": 0, "97190592": 0, "30": 0, "777859151970176": 0, "obtain": [0, 2], "attach": 0, "mathsf": [0, 2], "_i": 0, "x_i": 0, "_": 0, "cannot": 0, "directli": 0, "plot": [0, 2, 4, 5], "histogram": 0, "without": 0, "thei": [0, 2, 6, 7], "A": [0, 4, 5], "common": 0, "get": 0, "back": 0, "approxim": 0, "replac": [0, 2], "accord": 0, "heart": 0, "bootstrap": 0, "particl": [0, 3, 6, 7], "filter": [0, 3, 7], "later": 0, "x_resampl": 0, "choic": [0, 5], "choos": 0, "an": 0, "index": 0, "equal": [0, 5], "so": [0, 2], "them": [0, 2, 6, 7], "give": 0, "posterior": 0, "scatter": [0, 2, 5], "s": [0, 2, 4, 5], "c": [0, 2], "white": 0, "about": [1, 2, 3], "introduc": 1, "basic": 1, "variat": 1, "mont": [1, 2, 6, 7], "carlo": [1, 2, 6, 7], "method": [1, 2], "introduct": [1, 7], "import": [1, 2, 4, 5, 6, 7], "sampl": [1, 2, 6, 7], "keep": 2, "python": 2, "librari": 2, "oper": 2, "scipi": 2, "scientif": 2, "when": [2, 6, 7], "rememb": 2, "aim": 2, "draw": 2, "number": 2, "given": 2, "most": 2, "case": 2, "typic": 2, "code": 2, "start": 2, "line": 2, "It": 2, "good": 2, "learn": 2, "few": 2, "fix": 2, "As": 2, "mention": 2, "pseudorandom": 2, "often": 2, "seed": 2, "reproduc": 2, "sequenc": 2, "debug": 2, "purpos": 2, "For": 2, "want": [2, 6, 7], "check": 2, "your": [2, 6, 7], "work": 2, "output": 2, "one": 2, "share": 2, "result": 2, "ha": 2, "The": [2, 3, 6], "global": 2, "being": 2, "discourag": 2, "recommend": 2, "instanc": 2, "42": 2, "usual": 2, "see": [2, 6, 7], "convert": 2, "although": 2, "still": 2, "accept": 2, "sai": 2, "uniform": 2, "u": 2, "77395605": 2, "43887844": 2, "85859792": 2, "69736803": 2, "09417735": 2, "97562235": 2, "7611397": 2, "78606431": 2, "12811363": 2, "45038594": 2, "demonstr": 2, "seen": 2, "achiev": 2, "place": 2, "circl": 2, "insid": 2, "squar": 2, "time": 2, "whether": 2, "everi": 2, "leq": 2, "hold": 2, "do": 2, "some": [2, 6], "extra": 2, "step": [2, 5], "converg": 2, "again": 2, "consist": 2, "cell": 2, "pi_estim": 2, "inside_circl": 2, "arrai": [2, 4, 5], "colour": 2, "outside_circl": 2, "count": 2, "fig": 2, "ax": 2, "subplot": 2, "figsiz": 2, "printindex": 2, "reason": 2, "next": 2, "week": 2, "append": 2, "els": 2, "cla": 2, "add_patch": 2, "color": [2, 5], "k": [2, 4, 5], "fill": 2, "fals": 2, "rectangl": 2, "8": [2, 5], "set_titl": 2, "remov": 2, "box": 2, "xtick": 2, "ytick": 2, "spine": 2, "top": 2, "set_vis": 2, "bottom": 2, "set_xtick": 2, "set_ytick": 2, "set_xlim": 2, "set_ylim": 2, "ones": [2, 4], "lw": 2, "set_xlabel": 2, "delv": 2, "complic": 2, "problem": 2, "best": 2, "wai": 2, "repres": 2, "through": 2, "variabl": 2, "mathbb": 2, "quad": 2, "3": [2, 4, 5, 6, 7], "list": 2, "correspond": 2, "stem": 2, "markerfmt": 2, "ko": 2, "linefmt": 2, "stemcontain": 2, "object": [2, 4], "artist": 2, "easili": 2, "cdf": 2, "cumsum": 2, "ro": 2, "drawstyl": 2, "post": 2, "line2d": 2, "0x1135d7b80": 2, "kalman": [3, 6], "smoother": [3, 4, 6, 7], "model": [4, 5], "taken": [4, 5], "section": [4, 5], "simplif": [4, 5], "1234": 4, "linear": 4, "system": 4, "track": 4, "vx": 4, "vy": 4, "1000": [4, 5], "04": [4, 5, 6, 7], "4x4": [4, 5], "matri": 4, "i_2": 4, "kappa": [4, 5], "0_2": 4, "99": [4, 5], "block": [4, 5], "ey": [4, 5], "dot": [4, 5], "multivariate_norm": [4, 5], "b": [4, 5], "alpha": [4, 5], "legend": [4, 5], "true": [4, 5], "trajectori": 4, "0x130c07a60": 4, "mu": 4, "v": 4, "mu_pr": 4, "v_pred": 4, "linalg": [4, 5], "inv": [4, 5], "g": 4, "mu_smooth": 4, "v_smooth": 4, "paramet": [5, 6, 7], "upper": 5, "ident": 5, "size": 5, "2x2": 5, "lower": 5, "initi": 5, "t_ssm": 5, "400": 5, "sig_i": 5, "x_particl": 5, "x_particles_pr": 5, "x_est": 5, "log_w": 5, "predict": 5, "updat": 5, "linewidth": 5, "companion": 6, "webpag": 6, "taught": 6, "o": 6, "deniz": 6, "akyildiz": 6, "try": [6, 7], "contain": 6, "within": 6, "materi": 6, "previou": 6, "smc": 6, "masterclass": 6, "resourc": [6, 7], "my": 6, "ltcc": 6, "advanc": 6, "statist": 6, "stochast": [6, 7], "simul": 6, "found": [6, 7], "upload": [6, 7], "handout": [6, 7], "version": [6, 7], "question": [6, 7], "mini": [6, 7], "quizz": [6, 7], "exclud": [6, 7], "pleas": [6, 7], "download": [6, 7], "open": [6, 7], "adob": [6, 7], "acrobat": [6, 7], "anim": [6, 7], "activ": [6, 7], "click": [6, 7], "won": [6, 7], "run": [6, 7], "browser": [6, 7], "13": [6, 7], "11": [6, 7], "2023": [6, 7], "reject": [6, 7], "pdf": [6, 7], "20": [6, 7], "markov": [6, 7], "chain": [6, 7], "27": [6, 7], "smooth": [6, 7], "12": [6, 7], "ssm": [6, 7], "theori": 7, "algorithm": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"import": 0, "sampl": 0, "lectur": [1, 3], "1": 1, "introduct": [2, 6], "estim": 2, "pi": 2, "discret": 2, "probabl": 2, "comput": 2, "3": 3, "The": [4, 5], "kalman": 4, "filter": [4, 5, 6], "particl": 5, "an": 6, "bayesian": 6, "theori": 6, "method": 6, "tutori": 6, "summer": 6, "school": 6, "2024": 6, "slide": [6, 7], "tabl": 6, "content": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})