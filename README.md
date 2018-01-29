# ToDoGithub
This app was made by Yannick Frisart for scripting. The goal of this app is to make a easy way to track my issue's on my phone and get reminded what still needs work.

## Target devices
My target device is mainly ios, however the app should work on both android and ios.

## Getting Started
To get started clone the respority.
Open the folder in the terminal and run
```
  npm install
```

To start the development server run
```
  npm start
```

Then either open the simulator by pressing I on your keyboard, or scan the QR-code in the expo app on your phone

## License information
Copyright (c) 2018 Yannick Frisart ALL RIGHTS RESERVED

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Table of Contents
* [App Component](#app-component)
* [Header Component](#header-component)
* [Home Component](#home-component)
* [Issue Component](#issue-component)
* [IssueDesc Component](#issuedesc-component)
* [IssueRow Component](#issuerow-component)
* [Respos Component](#respos-component)

## App Component
### Usage
The App component consists of the following
* Native router
  * Route's
    * [Home Component](#home-component) - path = "/"
    * [IssueDesc Component](#issuedesc-component) - path = "/issue/:issueId"

### Location
The App Component is located at
```
  ./App.js
```

### Component Code
```jsx
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route path="/issue/:issueId" render={({ match }) => <IssueDesc match={match} />} />
        </View>
      </NativeRouter>
    );
  }
}
```

### Attributes
The App Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
- | - | -

## Header Component
### Usage
The Header component consists of the following
* Back arrow
* Page title

### Location
The Header Component is located at
```
  ./components/header.js
```

### Component Code
```jsx
export default class Header extends React.Component {
  render() {
    return (
      <View style={[styles.header, { backgroundColor: this.props.background }]}>
        {this.props.backArrow && (
          <Link to="/" style={styles.back}>
            <Image source={backArrowIcon} />
          </Link>
        )}
        <Text style={styles.text}>{this.props.header}</Text>
      </View>
    );
  }
}
```

### Attributes
The Header Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
backArrow | bool | Should there be a back arrow in the header.
background | string | What should the background color of the header be.
header | string | What is the title that should be in the header.

## Home Component
### Usage
The Home component consists of the following
* Header
* List of issue's

### Location
The Home Component is located at
```
  ./routes/home.js
```

### Component Code
```jsx
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header header="HOME" background="#444eee" />
        <Respos />
      </View>
    );
  }
}
```

### Attributes
The Home Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
- | - | -

## Issue Component
### Usage
The Issue component consists of the following
* Link to [IssueDesc Component](#issuedesc-component)
  * Issue Title
  * Issue Milestone

### Location
The Issue Component is located at
```
  ./components/issue.js
```

### Component Code
```jsx
export default class Issue extends React.Component {
  render() {
    return (
      <Link style={styles.issue} to={`issue/${this.props.index}`} >
        <View style={styles.linkwrap}>
          <Text style={styles.title}>{this.props.details.title}</Text>
          <Text style={styles.milestone}>{this.props.details.milestone}</Text>
        </View>
      </Link>
    );
  }
}
```

### Attributes
The Issue Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
index | string | What is the issueId of the issue.
details | object | The object that contains all the issue data.

## IssueDesc Component
### Usage
The IssueDesc component consists of the following
* Header
* List of Issue details
  * Title
  * Description
  * Status
  * Assigned
  * Labels
  * Milestone

### Location
The IssueDesc Component is located at
```
  ./routes/issuedesc.js
```

### Component Code
```jsx
export default class IssueDesc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: {},
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.syncState(`/issues/${this.props.match.params.issueId}`, {
      context: this,
      state: 'issue',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const issue = this.state.issue;
    return (
      <ScrollView style={styles.container}>
        <Header header="ISSUE" background="#5eeeee" backArrow />
        {issue.title && <IssueRow key="Title" label="Title" value={this.state.issue.title} />}
        {issue.body && <IssueRow key="Body" label="Description" value={this.state.issue.body} />}
        {issue.status && <IssueRow key="Status" label="Status" value={this.state.issue.status} />}
        {issue.assigned && (
          <IssueRow key="Assigned" label="Assigned" value={this.state.issue.assigned} />
        )}
        {issue.labels && <IssueRow key="Labels" label="Labels" value={this.state.issue.labels} />}
        {issue.milestone && (
          <IssueRow key="Milestone" label="Milestone" value={this.state.issue.milestone} />
        )}
      </ScrollView>
    );
  }
}
```

### Attributes
The IssueDesc Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
issueId | string | The identifier of the issue, used to get the issue details from the database.

## IssueRow Component
### Usage
The IssueRow component consists of the following
* Row
  * Label
  * Value of data

### Location
The Issuerow Component is located at
```
  ./components/issueRow.js
```

### Component Code
```jsx
export default class IssueRow extends React.Component {
  render() {
    if (this.props.label === 'Labels') {
      const value = this.props.value;
      const splitted = value.split(', ');
      console.log(splitted);
      return (
        <View style={styles.issueRow}>
          <Text style={styles.inputLabel}>{this.props.label}</Text>
          <View style={styles.labels}>
            {Object.keys(splitted).map(key => (
              <Text key={key} style={styles.label}>
                {splitted[key]}
              </Text>
            ))}
          </View>
        </View>
      );
    }
    return (
      <View style={styles.issueRow}>
        <Text style={styles.inputLabel}>{this.props.label}</Text>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
```

### Attributes
The IssueRow Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
label | string | The text that should be the title of the issue row.
value | string | What is the value of the label.

## Respos Component
### Usage
The Respos component consists of the following
* Scrollable view
  * List of Issue's
    * Links to [IssueDesc Component](#issuedesc-component)

### Location
The Respos Component is located at
```
  ./components/respos.js
```

### Component Code
```jsx
export default class Respos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      respos: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`/issues`, {
      context: this,
      state: 'respos',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  populateData() {
    const respos = { ...this.state.respos };
    const item = {
      title: 'Issue desc 1',
      tags: {
        bug: true,
        toDo: true,
      },
      assigned: {
        p1: 'Yannick Frisart',
      },
      milestone: 'V0.3',
    };
    const timestamp = Date.now();
    respos[`issue-${timestamp}`] = item;
    this.setState({ respos });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {
            Object
              .keys(this.state.respos)
              .map(key => <Issue key={key} index={key} details={this.state.respos[key]} />)
          }
        </ScrollView>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
```

### Attributes
The Respos Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
- | - | -

